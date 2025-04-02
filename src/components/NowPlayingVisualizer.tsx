
import { motion } from "framer-motion";

const NowPlayingVisualizer = () => {
  return (
    <div className="flex gap-1 items-end h-6 mt-2">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="w-1 bg-green-400 rounded"
          animate={{ height: ["20%", "100%", "20%"] }}
          transition={{
            duration: 0.6 + i * 0.1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  );
};

export default NowPlayingVisualizer;
