import React from 'react';
import { Avatar } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Repeat2, Heart, BarChart2 } from "lucide-react";

const TweetPreview = ({ content }) => {
  return (
    <Card className="w-full max-w-[500px]">
      <CardContent className="pt-6">
        <div className="flex space-x-4">
          <Avatar className="w-12 h-12 flex-shrink-0">
            <img src="https://github.com/shadcn.png" alt="User" className="rounded-full" />
          </Avatar>
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2 mb-1">
              <span className="font-bold truncate">John Doe</span>
              <span className="text-gray-500 truncate">@johndoe</span>
              <span className="text-gray-500 flex-shrink-0">· 1m</span>
            </div>
            <p className="mt-2 text-gray-900 break-words whitespace-pre-wrap" style={{ overflowWrap: 'break-word', wordWrap: 'break-word' }}>
              {content || "What's happening?"}
            </p>
            <div className="flex justify-between mt-4 text-gray-500">
              <MessageCircle size={18} />
              <Repeat2 size={18} />
              <Heart size={18} />
              <BarChart2 size={18} />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TweetPreview;