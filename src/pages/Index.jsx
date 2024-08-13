import React, { useState } from 'react';
import TweetInput from '../components/TweetInput';
import TweetPreview from '../components/TweetPreview';

const Index = () => {
  const [tweetContent, setTweetContent] = useState('');

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-center text-gray-900">
          Twitter Preview Tool
        </h1>
        <div className="bg-white shadow-md rounded-lg p-6 space-y-6">
          <TweetInput value={tweetContent} onChange={setTweetContent} />
          <div className="border-t pt-6">
            <h2 className="text-xl font-semibold mb-4">Preview</h2>
            <TweetPreview content={tweetContent} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;