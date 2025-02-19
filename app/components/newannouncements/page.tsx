"use client";

import React from 'react';
import { Book } from 'lucide-react';

const NewAnnouncement = () => {
  const handleNavigation = () => {
    window.location.href = '/ebook/ebook1';
  };

  return (
    <div
      onClick={handleNavigation}
      style={{ backgroundColor: '#1a1a1b' }}
      className="w-full py-1.5 flex items-center justify-center cursor-pointer transition-colors duration-200 hover:!bg-gray-800"
    >
      <div className="container max-w-2xl mx-auto px-4 flex justify-center">
        <div className="flex items-center justify-center gap-3">
          <Book className="w-5 h-5 text-white flex-shrink-0" />
          <span className="text-sm font-semibold text-white text-center">
            New eBook Release Check out our latest eBook: {'The Ultimate Guide to AI Implementation'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewAnnouncement;