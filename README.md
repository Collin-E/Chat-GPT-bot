# Chat-GPT-bot

This is a discord bot that can be added to discord servers. 

Sample output:
![image](https://user-images.githubusercontent.com/115193664/222065678-22813cfd-dbad-484f-9b85-38ac319bc960.png)
![image](https://user-images.githubusercontent.com/115193664/222065703-b3486bf4-f7b0-4c9b-af95-7ceccacd89a9.png)
![image](https://user-images.githubusercontent.com/115193664/222065731-64f10b46-7152-4c34-a315-145b50edf724.png)



The bot is supplied 3 things that are user/programmer specific:
1. A channel ID. The bot will read messages from a specific channel in the discord server it is in.
2. A discord bot token. This bot token can be generated on the discord developer portal.
3. An open AI API key. This can be generated on the open AI website.

Something important to note, open AI is very strict about how many requests they let their free APIs handle. This means that in order for this bot to work properly,
the Open AI API key must be from a paid account. These paid accounts are charged per request their API handles. In essence, I don't want to keep this bot running under
my keys because it charges money.
