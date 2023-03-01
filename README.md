# Chat-GPT-bot

This is a discord bot that can be added to discord servers. The bot fowards user's discord messages to Open AI's API, and then displays the response to the server.
This bot can server a number of purposes, such as, definitions, coding, text suggestions, google searches, etc.

Sample output:

![image](https://user-images.githubusercontent.com/115193664/222065678-22813cfd-dbad-484f-9b85-38ac319bc960.png)
![image](https://user-images.githubusercontent.com/115193664/222065703-b3486bf4-f7b0-4c9b-af95-7ceccacd89a9.png)
![image](https://user-images.githubusercontent.com/115193664/222065731-64f10b46-7152-4c34-a315-145b50edf724.png)



The bot is supplied 2 things that are user/programmer specific:
1. A discord bot token. This bot token can be generated on the discord developer portal.
2. An open AI API key. This can be generated on the open AI website.

Something important to note, open AI is very strict about how many requests they let their free APIs handle. This means that in order for this bot to work properly,
the Open AI API key must be from a paid account. These paid accounts are charged per request their API handles. In essence, I don't want to keep this bot running under
my keys because it charges money.

Also note that in my code, I get my API keys from a .env file. The lines that you have to change (or just make your own .env file) are lines 19 and 44.
