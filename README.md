<p align="center">
  <a href="" rel="noopener">
 <img width=350px height=160x src="https://i.imgur.com/UAoO8sl.png" alt="Project logo"></a>
</p>

<!-- <img width=200px height=200px src="https://avatars.githubusercontent.com/u/100745757?s=200&v=4" alt="Project logo"></a>-->
<!--</p>-->



<h3 align="center">NutriHelp - Aiming to promote healthy eating habits for Australia's senior population</h3>

---

<p align="center"> NutriHelp is an Android and Web application that aims to promote healthy eating habits for Australia's senior population,
by providing personalised recipes based on the user's specified health conditions and nutritional preferences.
Our goal is to decrease the number of elderly people that are either malnourished or at risk of malnutrition,
promote nutritional health through food intake and increase transparency and awareness of our user’s current nutritional health. 
    <br> 
</p>

## Table of Contents

- [Getting Started](#getting_started)
- [Android app deployment](#appdev)
- [Web frontend deployment](#webdev)

## Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

```
git clone https://github.com/Gopher-Industries/Nutrihelp
```

<h2 align="center" name = "appdev">> Android app deployment </h2> <a name = "appdev"></a>

### Prerequisites

The project requires Android studio for application to run.

We are using Expo for this application, follow the guide below to install expo


### Installing expo 

We first need to make sure we have NodeJs installed 

To install NodeJs,go to https://nodejs.org/en/download/ and download the latest version of NodeJs. If you have anLTS release greater than 12 please move to next section.

After you have installed NodeJs, Open the NodeJs Terminal to install Expo. 

To install Expo 
```
npm install -g expo-cli
```

For Android Studio, go to https://developer.android.com/studio and download the file. It should be ~1gb. 
Do a standard Install of Android Studio.


## Deployment <a name = "deployment"></a>

For a step by step deployment and android walkthrough, please go through the User Manual section in the handover document.
The handover document of T2-2022 and T3-2022 has relevant information about the feature research as well as the steps to login to your GCP account and using Android studio.

After cloning the github to your local repository, to run the application, 
In your local repository, open Team-TaskForceX folder
Open TTFX_T3_2022

Type this to install all the dependencies. 
```
npm install
```

After you have installed all the dependencies, to run the application use:

```
npx expo start --android 
```

<h2 align="center">> Web Frontend deployment </h2> <a name = "webdev"></a>

### Getting Started with the web frontend. 

 

These instructions will get you a copy of the web frontend up and running on your local machine for development and testing purposes. 


 

<h4> Node.js </h4>

 
 

The project requires Node.js to deploy the web frontend on your local machine. 

To install Node.js, go to https://nodejs.org/en/download/ and download the latest version of Node.js.  

Open the node.js command prompt you just installed and navigate to the path of your local web-frontend folder. 

 
```
cd <YOUR SYSTEM PATH>/Nutrihelp/web-frontend
```

Install all the necessary node modules that the project needs. 

```
npm intall
```

Compile and run your deployment locally. 

```
npm start
```

