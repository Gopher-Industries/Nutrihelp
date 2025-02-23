from flask import Flask, request, jsonify, render_template, session
from flask_session import Session  # You need to install Flask-Session
from openai import OpenAI
import secrets
from flask_cors import CORS

client = OpenAI(api_key="")
# Generate a secret key for the Flask application
def generate_secret_key():
    # Generate a 256-bit (32 bytes) secret key
    return secrets.token_hex(32)

# Generate a session key for a user session
def generate_session_key():
    # Generate a 256-bit (32 bytes) session key
    return secrets.token_hex(32)



app = Flask(__name__)
app.config["SECRET_KEY"] = generate_secret_key()
app.config["SESSION_TYPE"] = "filesystem"
Session(app)


def is_relevant_question(question):
    """
    Use OpenAI to determine if the question is relevant to NutriHelp or nutrition.
    """
    # This prompt asks the model to classify if the question is about NutriHelp or nutrition
    messages = [{"role": "system", "content": """You are a chatbot related to Nutrition. Your job is to see if the following message matches to any of the following: 
                 1 - nutrition, food facts, food comparison, related information 
                 2 - Is a common conversational message such as greetings or something similar 
                3 - Is a question about NutriHelp/Deakin University. 
                Only reply 'no' if the message is clearly irrelevant to the conversation, nutrition and does not match with any of the above. 
                 Answer with 'yes' or 'no' only."""},
        {"role": "user", "content": question}
        ]
    chat_completion = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=messages
    )
    response_content = chat_completion.choices[0].message.content
    print(response_content.strip().lower())
    return response_content.strip().lower() == "yes"

def ask_gpt(question):
    # Initialize conversation history if it doesn't exist
    if "chat_history" not in session:
        session["chat_history"] = []

    if not is_relevant_question(question):
        return "I can only provide information about NutriHelp or nutrition. Please ask a relevant question."
    
    if not session["chat_history"]:
            session["chat_history"].append({
                "role": "system",
                "content": "Hello, I am Roy, a chatbot working for NutriHelp. NutriHelp is a project at Deakin University under Gopher Industries, focusing on MedTech. We leverage AI to help people track their nutrition. Feel free to ask me anything about NutriHelp or general nutrition, or just say hi!"
            })

    # Append the new question to the conversation history
    session["chat_history"].append({"role": "user", "content": question})
    
    # Make the request to OpenAI API with the conversation history
    chat_completion = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=session["chat_history"]
    )
    
    print(session["chat_history"])

    # Extract the response and add it to the conversation history
    response_content = chat_completion.choices[0].message.content
    session["chat_history"].append({"role": "system", "content": response_content})
    
    return response_content


@app.route("/")
def index():
    return render_template("chat.html")

@app.route("/ask", methods=["POST"])
def chat_with_gpt():
    data = request.json
    question = data.get("question", "")
    if not question:
        return jsonify({"error": "No question provided"}), 400
    response = ask_gpt(question)
    return jsonify({"response": response})

@app.route("/reset_session", methods=["GET"])
def reset_session():
    session.clear()  # This clears the session data, including the conversation history
    return jsonify({"message": "Session reset successfully"}), 200

if __name__ == "__main__":
    app.run(debug=True)
