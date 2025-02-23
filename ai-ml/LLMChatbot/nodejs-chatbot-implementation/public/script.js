// script.js
function sendQuestion() {
    const userInput = document.getElementById('user-input');
    const chatOutput = document.getElementById('chat-output');
    const question = userInput.value;

    fetch('http://localhost:3000/ask', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: question })
    })
    .then(response => response.json())
    .then(data => {
        chatOutput.innerHTML += `<div>User: ${question}</div>`;
        chatOutput.innerHTML += `<div>Bot: ${data.response}</div>`;
        userInput.value = ''; // clear input after sending
    })
    .catch(error => console.error('Error:', error));
}