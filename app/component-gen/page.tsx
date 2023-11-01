"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function StreamDataFromApi() {
  const [dataStream, setDataStream] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: 'POST',
          url: 'https://www.llama2.ai/api',
          headers: {
            Authorization: 'Bearer YOUR_ACCESS_TOKEN',
            'Content-Type': 'application/json',
          },
          data: {
            prompt: '[INST] profile card [/INST]\n',
            version: '9dff94b1bed5af738655d4a7cbcdcde2bd503aa85c94334fe1f42af7f3dd5ee3',
            systemPrompt: 'You are a component code generator tool. I will give you a prompt. Send me back the code of the component using React, Next.js and tailwind css. just send only the code and nothing else. code only, no instruction or advice is required. Don\'t start with Sure!.... Just start with the code as markdown',
            temperature: 0.75,
            topP: 0.9,
            maxTokens: 4096,
          },
          responseType: 'stream',
        };

        // const response = await axios.request(options);

        // // Assuming the API response is a text document, you can process it here
        // // For example, you can convert the stream to a string
        // let data = '';
        // response.data.on('data', (chunk) => {
        //   data += chunk.toString('utf8');
        // });

        // response.data.on('end', () => {
        //   setDataStream(data);
        // });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {dataStream ? (
        <pre>{dataStream}</pre>
      ) : (
        <p>Loading data from the API...</p>
      )}
    </div>
  );
}

export default StreamDataFromApi;
