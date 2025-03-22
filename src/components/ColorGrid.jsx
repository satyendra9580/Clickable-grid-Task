import React, { useState, useEffect, useRef } from 'react';
import { toast } from "sonner";
import { motion } from "framer-motion";

const ColorGrid = () => {
  const [clickedBoxes, setClickedBoxes] = useState([]);
  const [isRevealing, setIsRevealing] = useState(false);
  const [currentRevealIndex, setCurrentRevealIndex] = useState(0);
  const totalBoxes = 9;
  const initialColor = "bg-white";
  const clickedColor = "bg-[#34C759]";
  const revealColor = "bg-[#FF9500]";
  const gridRef = useRef(null);
  
  const handleBoxClick = (index) => {
    if (isRevealing || clickedBoxes.includes(index)) return;
    
    const newClickedBoxes = [...clickedBoxes, index];
    setClickedBoxes(newClickedBoxes);
    
    // Check if all boxes are clicked
    if (newClickedBoxes.length === totalBoxes) {
      toast("All cells activated! Beginning sequence replay...");
      setIsRevealing(true);
      setCurrentRevealIndex(0);
    }
  };
  
  useEffect(() => {
    if (!isRevealing) return;
    
    if (currentRevealIndex < clickedBoxes.length) {
      const timer = setTimeout(() => {
        setCurrentRevealIndex(currentRevealIndex + 1);
      }, 600); 
      
      return () => clearTimeout(timer);
    } else {
      // Reset after animation completes
      const timer = setTimeout(() => {
        setClickedBoxes([]);
        setIsRevealing(false);
        setCurrentRevealIndex(0);
        toast("Sequence completed. Start again?");
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [isRevealing, currentRevealIndex, clickedBoxes]);
  
  const getBoxColor = (index) => {
    if (isRevealing) {
      const sequenceIndex = clickedBoxes.indexOf(index);
      if (sequenceIndex < currentRevealIndex) {
        return revealColor;
      } else if (clickedBoxes.includes(index)) {
        return clickedColor;
      }
      return initialColor;
    } else {
      return clickedBoxes.includes(index) ? clickedColor : initialColor;
    }
  };

  const getBoxStatus = (index) => {
    if (clickedBoxes.includes(index)) {
      return clickedBoxes.indexOf(index) + 1;
    }
    return "";
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full max-w-md"
    >
      <div className="aspect-square w-full relative">
        <div 
          ref={gridRef}
          className="grid grid-cols-3 grid-rows-3 gap-3 h-full w-full"
        >
          {Array.from({ length: totalBoxes }).map((_, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className={`
                flex items-center justify-center rounded-xl shadow-sm
                ${getBoxColor(index)}
                cursor-pointer
                transition-all duration-300 ease-out
                border border-neutral-100
                hover:shadow-md
              `}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleBoxClick(index)}
            >
              <span className="text-2xl font-semibold opacity-70">
                {getBoxStatus(index)}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="mt-8 flex justify-between items-center">
        <div className="text-sm text-neutral-500">
          Cells clicked: {clickedBoxes.length} of {totalBoxes}
        </div>
        
        {clickedBoxes.length > 0 && !isRevealing && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="px-4 py-2 rounded-full bg-neutral-200 text-neutral-800 text-sm hover:bg-neutral-300 transition-colors"
            onClick={() => {
              setClickedBoxes([]);
              toast("Grid reset");
            }}
          >
            Reset Grid
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};

export default ColorGrid;
