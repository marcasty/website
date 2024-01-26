import React from 'react';

interface BlogEntryProps {
  title: string;
  url: string;
}

export const BlogEntry: React.FC<BlogEntryProps> = ({ title, url }) => {
  return (
    <div className="blog-entry">
      <a href={url} target="_blank" rel="noopener noreferrer" className="underline text-gray-500 hover:text-blue-600">
        {title}
      </a>
    </div>
  );
};