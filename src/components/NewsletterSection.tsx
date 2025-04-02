
import React from 'react';
import NewsletterForm from './NewsletterForm';
import { Sparkles } from 'lucide-react';

const NewsletterSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="container max-w-4xl mx-auto bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-6 -mr-6">
          <Sparkles className="h-12 w-12 text-music-red opacity-20" />
        </div>
        
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Stay Updated</h2>
          <p className="text-gray-600 max-w-md mx-auto">
            Subscribe to our newsletter for the latest music releases, exclusive content, and personalized playlists.
          </p>
        </div>
        
        <NewsletterForm />
      </div>
    </section>
  );
};

export default NewsletterSection;
