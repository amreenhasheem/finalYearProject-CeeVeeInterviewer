using System.Collections;
using UnityEngine;
using UnityEngine.Networking;
using SpeechLib;
using System.IO;

public class InterviewProcess : MonoBehaviour
{
    private SpVoice voice;
    private AudioSource audioSource;
    public string microphone;
    public AudioClip answerAudioClip;
    public bool completed;
    public string askedQuestion;
    public string userAnswer;
    public string correctAnswer;


    // Start is called before the first frame update
    void Start()
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
        StartCoroutine(GetRequest("http://localhost/interviewapplication/GetUsers.php"));
    }

    IEnumerator GetRequest(string uri)
    {
        voice.Speak("Welcome to your interview,");

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

                string specchToTextConvertUrl = "http://127.0.0.1:3000/aneesh";
                UnityWebRequest getConvertedText = UnityWebRequest.Get(specchToTextConvertUrl);
                yield return getConvertedText.SendWebRequest();
                userAnswer = getConvertedText.downloadHandler.text;

                System.IO.DirectoryInfo di = new DirectoryInfo("D:\\Unity\\FinalYearInterview\\Assets\\Audio");

                foreach (FileInfo file in di.GetFiles())
                {
                    file.Delete();
                }

                Debug.Log("Question Asked - "+askedQuestion +"Correct Answer - "+ correctAnswer + "User's Answer - " +userAnswer);

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
                    }
                }

                // api to send user answer to the rake model
               
                // Moving on to next question
                voice.Speak("ok, moving on to your next question");
             
            }
            
        }



    }
}