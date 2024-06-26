// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { SessionsClient } from "@google-cloud/dialogflow";

const projectId = process.env.DIALOGFLOW_PROJECT_ID;
const clientEmail = process.env.DIALOGFLOW_CLIENT_EMAIL;
const privateKey = process.env.DIALOGFLOW_PRIVATE_KEY
  ? process.env.DIALOGFLOW_PRIVATE_KEY.replace(/\\n/g, '\n')
  : null;

  if (!projectId || !clientEmail || !privateKey) {
    console.error('Missing required environment variables');
    if (!projectId) console.error('DIALOGFLOW_PROJECT_ID is missing');
    if (!clientEmail) console.error('DIALOGFLOW_CLIENT_EMAIL is missing');
    if (!privateKey) console.error('DIALOGFLOW_PRIVATE_KEY is missing or invalid');
  }
  
const sessionClient = new SessionsClient({
  credentials: {
    client_email: clientEmail,
    private_key: privateKey,
  },
});


console.log(`Project ID: "${projectId}"`);
console.log(`Client Email: "${clientEmail}"`);
console.log(`Private Key: ${privateKey ? 'Loaded' : 'Not Loaded'}`);
export default async function handler(req, res) {
  // res.status(200).json({ name: "John Doe" });

  if (req.method !== 'POST') {
    return res.status(405).end(); // Method Not Allowed
  }

  console.log('Project ID:', projectId);
console.log('Client Email:', clientEmail);
console.log('Private Key:', privateKey ? 'Loaded' : 'Not Loaded');

  const { message, sessionId } = req.body;
  if (!message || !sessionId) {
    return res.status(400).json({ error: 'Bad Request: Missing message or sessionId' });
  }
  console.log('Message:', message);
  console.log('SessionId:', sessionId);
  try{
  const sessionPath = sessionClient.projectAgentSessionPath(projectId, sessionId);
  console.log('SessionPath:', sessionPath);
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: message,
        languageCode: 'en-US',
      },
    },
  };

  

    console.log('Sending request to Dialogflow:', JSON.stringify(request));
    const [response]=await sessionClient.detectIntent(request);
    const result=response.queryResult;
    console.log('Received response from Dialogflow:', JSON.stringify(result.fulfillmentText));
    res.status(200).json({response:result.fulfillmentText})
  }
  catch(error){
    console.error('Error processing request:', error);
    console.error('error',error);
    res.status(500).json({error:"error processing Request"});
  }
}
