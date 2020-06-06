# finalYearProject-CeeVeeInterviewer
CeeVee Interviewer - A software that eases mass recrutement process by automating the technical HR round and providing a virtual adaptive questionnaire session to the interviewee



#Setup and Steps to run the application 

#ReactJS FRONTEND
Download and install any editor of your choice (Visual studio code/ Sublime /Atom)
The links for each are mentioned below :-
Visual studio code - (https://code.visualstudio.com/download)
Atom - (https://atom.io/)
Sublime Text - (https://www.sublimetext.com/3)

##Steps to set-up 
##1. Clone Repository from the Github link

##2. Open a terminal of your editor or command prompt and go to the path in which the project exists

##3. Type the following code:
      yarn install
     *This will ready our package.json file and install all the components used in our project*
*Note:- The version of Node.js we have used is Node.js v12.14.0.  Please update to this version in your current version is lesser.*

##4. Once the build is complete execute the following script in your terminal or cmd for the code to execute:
      yarn run



#NodeJS BACKEND 

##1. Setting up MySQL workbench and get the database instance running:
  **Install MySQL workbench:**
      sudo apt install mysql-workbench

  **Launch MySQL Workbench from the terminal**
      mysql-workbench

  **Configure MySQL Workbench using interactive interface giving username and password**

   **Goto File>Open SQL Script and select mybdFinalYearProjectDatabase.sql (from the directory where the project had been cloned from github) file to open**

  **Click on Run in Workbench to run the .sql file, this creates the database locally**


##2. Open terminal and go to the directory where the project is cloned and run the following:
      npm init -y 

##3. Install Express, link it to MySQL and allow cors policy:
      npm add express mysql cors
##4. Run NodeJs server using nodemon:
      nodemon index.js
        *It listening  on port 4000.....* 


#UNITY SETUP 

##1. Download and install unity 2018.3b or higher. Using this link - https://unity3d.com/get-unity/download

##2. Create a new 3d Project and paste the assets folder in <Project Name>/Assets folder.

##3. Set the number of questions in the Inspect tab of the Interviewer component.



#SERVER SETUP 
##XAMPP Server Setup 

##1. Download and Install Xampp using this link - https://www.apachefriends.org/download.html

##2. Put files in the htdocs/interviewapplication (Get the files from the Scripts folder)

##3. Put mydbFinalYearProjectDatabase.sql file in the xampp/mysql/interviewapplication folder.

##Flask Server Setup 

##1. Make sure you have Python 3+ installed 

##2. Install flask and Speech Recognition . For more information on installing these libraries - https://flask.palletsprojects.com/en/1.1.x/ and https://pypi.org/project/SpeechRecognition/ 

##3. Run the python file in Unity Assets\Assets\Plugins\Scripts folder using python IDLE



#Running the Unity Application after Setup -
##1. Finish setting up all the components Untiy, Xampp server and Flask Server.

##2. Run the Application on unity.

##3. You can access the database in myphpadmin to view your responses. For more information on myphpadmin check out the link - https://www.phpmyadmin.net






