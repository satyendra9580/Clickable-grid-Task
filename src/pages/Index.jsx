
import React, { useState, useEffect } from 'react';
import ColorGrid from '../components/ColorGrid';
import { toast } from "sonner";

const Index = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#f5f5f7] px-4">
      <div className="text-center mb-12 max-w-2xl">
        <span className="text-sm font-medium uppercase tracking-wider text-neutral-500 mb-2 block">Interactive Experience</span>
        <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4 tracking-tight">Chromatic Grid</h1>
        <p className="text-neutral-600 max-w-lg mx-auto">Click each cell to reveal its color. When you click the final cell, watch as they illuminate in your chosen sequence.</p>
      </div>
      
      <ColorGrid />
      
      <div className="mt-12 text-neutral-500 text-sm">
        <p>Design inspired by simplicity and elegance</p>
      </div>
    </div>
  );
};

export default Index;
