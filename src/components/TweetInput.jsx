import React from 'react';
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const TweetInput = ({ value, onChange }) => {
  return (
    <div className="space-y-2">
      <Label htmlFor="tweet-content">Tweet Content</Label>
      <Textarea
        id="tweet-content"
        placeholder="What's happening?"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-24"
      />
      <p className="text-sm text-gray-500 text-right">
        {value.length}/280 characters
      </p>
    </div>
  );
};

export default TweetInput;