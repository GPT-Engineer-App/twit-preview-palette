import React, { useState, useCallback } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import TweetInput from '../components/TweetInput';
import TweetPreview from '../components/TweetPreview';
import { toast } from "@/components/ui/use-toast";

const ErrorFallback = ({ error }) => (
  <div role="alert" className="p-4 bg-red-100 border border-red-400 text-red-700">
    <p className="font-bold">Something went wrong:</p>
    <pre className="mt-2 text-sm">{error.message}</pre>
  </div>
);

const Index = () => {
  const [tweetContent, setTweetContent] = useState('');

  const handleTweetChange = useCallback(async (newContent) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 0)); // Simulate async operation
      setTweetContent(newContent);
    } catch (error) {
      console.error("Error updating tweet content:", error);
      toast({
        title: "Error",
        description: "There was a problem updating the tweet content. Please try again.",
        variant: "destructive",
      });
    }
  }, []);

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-3xl font-bold text-center text-gray-900">
            Twitter Preview Tool
          </h1>
          <div className="bg-white shadow-md rounded-lg p-6 space-y-6">
            <TweetInput value={tweetContent} onChange={handleTweetChange} />
            <div className="border-t pt-6">
              <h2 className="text-xl font-semibold mb-4">Preview</h2>
              <TweetPreview content={tweetContent} />
            </div>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default Index;