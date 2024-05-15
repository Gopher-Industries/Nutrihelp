# Chatbot Project

## Description
This project is a simple chatbot interface that integrates a Node.js server with a Python script to handle user questions related to nutrition.

## Installation

1. Clone the repository:

sh
git clone <repository-url>
cd <repository-directory>


2. Install Node.js dependencies:

sh
npm install


3. Ensure you have Python installed and the required packages:

sh
pip install openai


## Configuration

1. Update the `pythonExecutablePath` in `server.js` to the path of your Python executable:

javascript:server.js
startLine: 18
endLine: 18


2. Add your OpenAI API key in `chatbot.py`:
python:chatbot.py
startLine: 5
endLine: 5



## Usage

1. Start the Node.js server:

sh
node server.js


2. Open your browser and navigate to `http://localhost:3000`.

3. Ask questions through the web interface.

## Project Structure

- `public/`
  - `index.html`: The main HTML file.
  - `styles.css`: The CSS file for styling.
  - `script.js`: The JavaScript file for handling user interactions.
- `server.js`: The Node.js server file.
- `chatbot.py`: The Python script for handling chatbot logic.

