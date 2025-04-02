
import React from 'react';
import NewsletterForm from './NewsletterForm';
import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const NewsletterSection = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="py-16 px-4"
    >
      <motion.div 
        className="container max-w-4xl mx-auto bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 relative overflow-hidden"
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <motion.div 
          className="absolute top-0 right-0 -mt-6 -mr-6"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          <Sparkles className="h-12 w-12 text-music-red opacity-20" />
        </motion.div>
        
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-2">Stay Updated</h2>
          <p className="text-gray-600 max-w-md mx-auto">
            Subscribe to our newsletter for the latest music releases, exclusive content, and personalized playlists.
          </p>
        </motion.div>
        
        <NewsletterForm />
      </motion.div>
    </motion.section>
  );
};

export default NewsletterSection;
