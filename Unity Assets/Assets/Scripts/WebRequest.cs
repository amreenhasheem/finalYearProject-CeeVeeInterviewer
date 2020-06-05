using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Networking;
using SpeechLib;

public class WebRequest : MonoBehaviour
{
    private SpVoice voice;
    private AudioSource audioSource;
    public string result;
    bool first = true;
    int numberOfQuestions = 1;
    public string microphone;

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
        // A correct website page.
        // StartCoroutine(GetRequest("http://localhost/interviewapplication/GetUsers.php"));
    }
    void Update()
    {

        if (first)
        {
            voice.Speak("Welcome to your interview,");
            //    +"Let me start by introducing myself to you, Im Aneesh, your interviewer for today's session,");
            //    + "i will be asking you multiple questions based on your response, you'll be given 20 seconds after each question to give your answer," +
            //    "I wish you all the best!, your first question is ");
            first = false;
        }
        while (numberOfQuestions != 0)
        {
            StartCoroutine(GetRequest("http://localhost/interviewapplication/GetUsers.php"));
            numberOfQuestions -= 1;
        }
    }

    IEnumerator GetRequest(string uri)
    {
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
                voice.Speak(webRequest.downloadHandler.text);
                voice.Speak("And Your answer is");

                voice.Speak(GetAudio());


            }
        }
    }

    public string GetAudio()
    {
        audioSource.Stop();
        audioSource.clip = Microphone.Start(microphone, false, 10, 44100);
        audioSource.loop = false;
        Debug.Log(Microphone.IsRecording(microphone).ToString());
        if (Microphone.IsRecording(microphone))
        {
            while (!(Microphone.GetPosition(microphone) > 0)) { }

            Debug.Log("recording started with" + microphone);
            // audioSource.Play();
            return "next question";

        }
        else
        {
            Debug.Log(microphone + "doesn't work");
            return "Doesn't work";
        }

    }
}