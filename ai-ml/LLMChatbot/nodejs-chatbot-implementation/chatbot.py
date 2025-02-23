import sys
import secrets
from openai import OpenAI

client = OpenAI(api_key="")

def is_relevant_question(question):
    messages = [{"role": "system", "content": """You are a chatbot related to Nutrition. Your job is to see if the following message matches to any of the following: 
                 1 - nutrition, food facts, food comparison, related information 
                 2 - Is a common conversational message such as greetings or something similar 
                 3 - Is a question about NutriHelp/Deakin University. 
                 Only reply 'no' if the message is clearly irrelevant to the conversation, nutrition and does not match with any of the above. 
                 Answer with 'yes' or 'no' only."""},
                {"role": "user", "content": question}]
    chat_completion = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=messages
    )
    response_content = chat_completion.choices[0].message.content.strip().lower()
    return response_content == "yes"

def ask_gpt(question):
    if not is_relevant_question(question):
        print("I can only provide information about NutriHelp or nutrition. Please ask a relevant question.")
        return

    # Simulate conversation history for demonstration
    chat_history = [{"role": "system", "content": "Hello, I am Roy, a chatbot working for NutriHelp. NutriHelp is a project at Deakin University under Gopher Industries, focusing on MedTech. We leverage AI to help people track their nutrition. Feel free to ask me anything about NutriHelp or general nutrition, or just say hi!"}]
    chat_history.append({"role": "user", "content": question})

    chat_completion = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=chat_history
    )

    response_content = chat_completion.choices[0].message.content
    print(response_content)

if __name__ == "__main__":
    if len(sys.argv) > 1:
        question = sys.argv[1]
        ask_gpt(question)
    else:
        print("No question provided")