import React, { useState } from 'react';
import '../styles/style.css'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator
} from '@chatscope/chat-ui-kit-react';
import { Link } from 'react-router-dom';
// import Draggable from 'react-draggable';


const API_KEY = process.env.CHTGPT_API_KEY; 
const systemMessage = {
  "role": "system", 
  "content": "Explain things like you're talking to a software professional with 2 years of experience."
}

function Chat2() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm ChatGPT! Ask me anything!",
      sentTime: "just now",
      sender: "ChatGPT"
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: 'outgoing',
      sender: "user"
    };

    const newMessages = [...messages, newMessage];
    
    setMessages(newMessages);

    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) {
    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message }
    });

    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages": [
        systemMessage,
        ...apiMessages
      ]
    }

    await fetch("https://api.openai.com/v1/chat/completions", 
    {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(apiRequestBody)
    }).then((data) => {
      return data.json();
    }).then((data) => {
      console.log(data);
      setMessages([...chatMessages, {
        message: data.choices[0].message.content,
        sender: "ChatGPT"
      }]);
      setIsTyping(false);
    });
  }

  return (
    <div className="drg">
      {isChatOpen && (
        <div className="chat-box active">
          <div className="chat-box-header">ChatGPT <Link to='/cht' className='expand' style={{ textDecoration: 'none'}}>Expand</Link></div>
          <div className="chat-box-content">
            <MessageList
              scrollBehavior="smooth"
              typingIndicator={isTyping ? <TypingIndicator content="ChatGPT is typing" /> : null}
            >
              {messages.map((message, i) => (
                <Message
                  key={i}
                  model={{
                    content: message.message,
                    sender: message.sender,
                    direction: message.direction,
                  }}
                />
              ))}
            </MessageList>
          </div>
          <div className="chat-box-input">
            <MessageInput placeholder="Type message here" onSend={handleSend} />
          </div>
        </div>
      )}
      {!isChatOpen && (
        <div className="chat-circle" onClick={() => setIsChatOpen(true)}>
          Chat
        </div>
      )}
    </div>
  );
}

export default Chat2;
