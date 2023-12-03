---
title: Firebase database import and export Guide
---

# Tech stack

-   Node.js

-   node-firestore-import-export package

-   Firebase API Credentials file.

# Preparation steps

1.  Install Node.js from <https://nodejs.org/en/download/>

2.  Create a Firebase project.

3.  Create a Firestore database.

4.  Retrieve Firebase project private key by:

    a.  In the Firebase Project click 1) Project settings

    b.  2\) Click the Service accounts tab.

    c.  3\) Click on "Generate new private key".

    d.  A project credential API JSON file will be downloaded. Rename
        file to ease use.

![A screenshot of a computer Description automatically
generated](./Firestore steps.png){width="6.268055555555556in"
height="4.513194444444444in"}

5.  Install node-firestore-import-export package by using following code
    in command prompt:

> npm install -g node-firestore-import-export

# Import NutriHelp Sample database.

Steps

1.  Download the sample database file in this GitHub Repository Folder

2.  Use the following code to import the sample database file to your
    Firebase project

firestore-import \--accountCredentials
\<path/to/credentials/APICredential.json\> \--backupFile
\<path/to/Nutrihelp sample dta.json\>

3.  Answer "Yes" if you are overriding existing data.

# Export NutriHelp Sample database.

Steps

1.  Use the following code to export the firestore database to your
    local computer.

firestore-export \--accountCredentials
\<path/to/credentials/APICredential.json\> \--backupFile
\<path/to/database filename.json\> \--prettyPrint

# Reference:

<https://www.npmjs.com/package/node-firestore-import-export>

https://www.youtube.com/watch?v=gPzs6t3tQak
