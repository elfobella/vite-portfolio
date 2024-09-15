import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Myself from "./assets/myself.jpeg"
import Socials from './Socials';

const AnimatedSection = () => {
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(imageRef.current, 
      { scale: 0.8, opacity: 0 }, 
      { scale: 1, opacity: 1, duration: 0.3, ease: 'power1.out' }
    );
    
    gsap.fromTo(textRef.current, 
      { scale: 0.8, opacity: 0 }, 
      { scale: 1, opacity: 1, duration: 0.5, ease: 'power1.out', delay: 0.5 } // Biraz gecikme ile başlar
    );
  }, []);

  return (
    <div>
        <div className="flex flex-col group items-center gap-4 border-4 p-5 sm:p-16 hover:scale-[0.98] cursor-pointer transition border-gray-800 rounded-lg">
          <img
            ref={imageRef}
            className="w-60 h-60 object-cover rounded-full"
            src={Myself}
            alt="asdad"
          />
          <div ref={textRef} className="text-center">
            <span className="text-5xl font-extrabold">Yunus Emre Uçar</span>
            <p className="text-xl font-bold text-gray-700">
              FullStack Developer
            </p>
            <Socials />
          </div>
        </div>
    </div>
  );
};

export default AnimatedSection;
