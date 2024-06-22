/** @type {import('next').NextConfig} */


// const dialogflowPrivateKey = process.env.DIALOGFLOW_PRIVATE_KEY
//   ? process.env.DIALOGFLOW_PRIVATE_KEY.replace(/\\n/g, '\n')
//   : '';
const nextConfig = {
  reactStrictMode: true,
  env: {
    DIALOGFLOW_PROJECT_ID: process.env.DIALOGFLOW_PROJECT_ID,
    DIALOGFLOW_CLIENT_EMAIL: process.env.DIALOGFLOW_CLIENT_EMAIL,
    DIALOGFLOW_PRIVATE_KEY: process.env.DIALOGFLOW_PRIVATE_KEY
  },
};

export default nextConfig;
