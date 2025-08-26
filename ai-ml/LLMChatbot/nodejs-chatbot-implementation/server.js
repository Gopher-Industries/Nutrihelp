const express = require('express');
const bodyParser = require('body-parser');
const { spawn } = require('child_process');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use(express.static('public'));

app.post('/ask', (req, res) => {
    const question = req.body.question;
    if (!question) {
        return res.status(400).json({ error: "No question provided" });
    }

    const pythonExecutablePath = 'C:/Users/tahat/anaconda3/envs/chatbot/python.exe';  // Adjust this path
    const pythonProcess = spawn(pythonExecutablePath, ['chatbot.py', question]);

    pythonProcess.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
        res.json({ response: data.toString() });
    });

    pythonProcess.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
        res.status(500).json({ error: "Error in Python script" });
    });

    pythonProcess.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    });
});

app.get('/', (req, res) => {
    res.send('Node.js and Python integration example');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});