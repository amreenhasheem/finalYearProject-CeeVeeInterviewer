using System.Collections;
using UnityEngine;
using UnityEngine.Networking;
using SpeechLib;
using System.IO;

public class InterviewProcessFinal : MonoBehaviour
{
    private SpVoice voice;
    private AudioSource audioSource;
    public string microphone;
    public AudioClip answerAudioClip;
    public bool completed;
    public string askedQuestion;
    public string userAnswer;
    public string correctAnswer;
    public bool first = true;
    public int numberOfQuestions;

    // Start is called before the first frame update
    public IEnumerator Start()
    {
        audioSource = GetComponent<AudioSource>();

        foreach (string device in Microphone.devices)
        {
            if (microphone == null)
            {
                microphone = device;
            }
        }
        voice = new SpVoice();

        yield return FirstQuestionRequest("http://localhost/interviewapplication/GetUsers.php");

        while (numberOfQuestions!=0)
        {
            yield return AfterFirstQuestionRequest("http://localhost/interviewapplication/GetNextQuestion.php");
        }
    }

    IEnumerator FirstQuestionRequest(string uri)
    {
        yield return new WaitForSeconds(4);
        voice.Speak("Welcome to your interview, "
            + "Let me start by introducing myself to you, Im Aneesh, your interviewer for today's session, i will be asking you multiple questions based on your response, you'll be given 10 seconds after each question to give your answer, and in case you dont know the answer you should not talk during that question, I wish you all the best!, ,your first question is ");

        using (UnityWebRequest webRequest = UnityWebRequest.Get(uri))
        {
            // Request and wait for the desired page.
            yield return webRequest.SendWebRequest();

            string[] pages = uri.Split('/');
            int page = pages.Length - 1;

            if (webRequest.isNetworkError)
            {
                Debug.Log(pages[page] + ": Error: " + webRequest.error);
            }
            else
            {
                Debug.Log(pages[page] + ":\nReceived: " + webRequest.downloadHandler.text);
                var questionAnswer = webRequest.downloadHandler.text.Split('$');
                askedQuestion = questionAnswer[0];
                correctAnswer = questionAnswer[1];
                voice.Speak(askedQuestion);
                audioSource.Stop();
                answerAudioClip = audioSource.clip = Microphone.Start(microphone, false, 10, 44100);
                yield return new WaitForSeconds(10);
                audioSource.loop = false;
                if (Microphone.IsRecording(microphone))
                {
                    while (!(Microphone.GetPosition(microphone) > 0)) { }
                    Debug.Log("recording");
                }
                else
                {
                    Debug.Log("Mic not working");
                }
                // Saving .wav audio file
                SavWav.Save("myFile", answerAudioClip);

                string specchToTextConvertUrl = "http://127.0.0.1:8000/aneesh";
                UnityWebRequest getConvertedText = UnityWebRequest.Get(specchToTextConvertUrl);
                yield return getConvertedText.SendWebRequest();
                userAnswer = getConvertedText.downloadHandler.text;

                System.IO.DirectoryInfo di = new DirectoryInfo("D:\\Unity\\FinalYearInterview\\Assets\\Audio");

                foreach (FileInfo file in di.GetFiles())
                {
                    file.Delete();
                }

                Debug.Log("Question Asked - " + askedQuestion + "Correct Answer - " + correctAnswer + "User's Answer - " + userAnswer);

                WWWForm form = new WWWForm();
                form.AddField("askedQuestion", askedQuestion);
                form.AddField("correctAnswer", correctAnswer);
                form.AddField("userAnswer", userAnswer);

                using (UnityWebRequest www = UnityWebRequest.Post("http://localhost/interviewapplication/SaveUserData.php", form))
                {
                    yield return www.SendWebRequest();

                    if (www.isNetworkError || www.isHttpError)
                    {
                        Debug.Log(www.error);
                    }
                    else
                    {
                        Debug.Log("Data upload to Database complete!");
                        Debug.Log(www.downloadHandler.text);
                    }
                }

                numberOfQuestions -= 1;

                // Moving on to next question
                if (numberOfQuestions != 0)
                {
                    voice.Speak("ok, moving on to your next question");
                }
                else
                {
                    voice.Speak("Thank you for your interview, we'll get back to you with the results shortly");
                }

            }

        }



    }


    IEnumerator AfterFirstQuestionRequest(string uri)
    {
        WWWForm form = new WWWForm();
        form.AddField("userAnswer", userAnswer);

        using (UnityWebRequest www = UnityWebRequest.Post(uri, form))
        {
            yield return www.SendWebRequest();

            if (www.isNetworkError || www.isHttpError)
            {
                Debug.Log(www.error);
            }
            else
            {
                Debug.Log("Next Question to ask- "+www.downloadHandler.text);
                var questionAnswer = www.downloadHandler.text.Split('$');
                askedQuestion = questionAnswer[0];
                correctAnswer = questionAnswer[1];
                voice.Speak(askedQuestion);
                audioSource.Stop();
                answerAudioClip = audioSource.clip = Microphone.Start(microphone, false, 10, 44100);
                yield return new WaitForSeconds(10);
                audioSource.loop = false;
                if (Microphone.IsRecording(microphone))
                {
                    while (!(Microphone.GetPosition(microphone) > 0)) { }
                    Debug.Log("recording");
                }
                else
                {
                    Debug.Log("Mic not working");
                }
                // Saving .wav audio file
                SavWav.Save("myFile", answerAudioClip);

                string specchToTextConvertUrl = "http://127.0.0.1:8000/aneesh";
                UnityWebRequest getConvertedText = UnityWebRequest.Get(specchToTextConvertUrl);
                yield return getConvertedText.SendWebRequest();
                userAnswer = getConvertedText.downloadHandler.text;

                System.IO.DirectoryInfo di = new DirectoryInfo("D:\\Unity\\FinalYearInterview\\Assets\\Audio");

                foreach (FileInfo file in di.GetFiles())
                {
                    file.Delete();
                }

                Debug.Log("Question Asked - " + askedQuestion + "Correct Answer - " + correctAnswer + "User's Answer - " + userAnswer);

                WWWForm form2 = new WWWForm();
                form2.AddField("askedQuestion", askedQuestion);
                form2.AddField("correctAnswer", correctAnswer);
                form2.AddField("userAnswer", userAnswer);

                using (UnityWebRequest www2 = UnityWebRequest.Post("http://localhost/interviewapplication/SaveUserData.php", form2))
                {
                    yield return www2.SendWebRequest();

                    if (www2.isNetworkError || www2.isHttpError)
                    {
                        Debug.Log(www2.error);
                    }
                    else
                    {
                        Debug.Log("Data upload to Database complete!");
                        Debug.Log(www2.downloadHandler.text);
                    }
                }
                numberOfQuestions -= 1;

                // Moving on to next question or ending interview
                if (numberOfQuestions != 0)
                {
                    voice.Speak("ok, moving on to your next question");
                }
                else
                {
                    voice.Speak("Thank you for your interview, we'll get back to you with the results shortly");
                }

            }
        }
    }
}
