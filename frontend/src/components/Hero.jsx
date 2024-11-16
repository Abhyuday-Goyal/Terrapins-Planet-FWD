'use client';

import Button from './items/Button'; // Ensure the path is correct and the Button component exists
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const Hero = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );

  return (
    <motion.section
      ref={sectionRef}
      className="h-[492px] md:h-[800px] flex items-center overflow-hidden relative"
      style={{
        background: 'linear-gradient(to bottom, #3B945E, #2C6E49, #1A4731)',
        backgroundPositionY,
      }}
      animate={{
        backgroundPositionX: '100%',
      }}
      transition={{ repeat: Infinity, duration: 60, ease: 'linear' }}
    >
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(59,148,94,0.3)_0%,transparent_80%)]"></div>

      {/* Fix for Seamless Bottom */}
      <div className="absolute bottom-0 w-full h-20 bg-gradient-to-b from-transparent to-[#1A4731]"></div>


      {/* Central Planet */}
      <div className="absolute h-64 w-64 md:h-96 md:w-96 bg-[#2C6E49] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_30px_10px_rgba(59,148,94,0.5)]"></div>

      {/* Animated Rings */}
      <motion.div
        style={{
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          rotate: '1turn',
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute h-[344px] w-[344px] md:h-[580px] md:w-[580px] border border-[#2C6E49]/50 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      ></motion.div>
      <motion.div
        style={{
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          rotate: '-1turn',
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute h-[444px] w-[444px] md:h-[780px] md:w-[780px] rounded-full border border-[#3B945E]/50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      ></motion.div>
      <motion.div
        style={{
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          rotate: '1turn',
        }}
        transition={{
          duration: 90,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute h-[544px] w-[544px] md:h-[980px] md:w-[980px] rounded-full border border-white opacity-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      ></motion.div>

      {/* Rotating Particles */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      >
        {[...Array(20)].map((_, index) => (
          <div
            key={index}
            className="absolute h-2 w-2 rounded-full bg-white opacity-30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `scale(${Math.random()})`,
              animation: `float ${5 + Math.random() * 5}s ease-in-out infinite`,
            }}
          ></div>
        ))}
      </motion.div>

      <div className="container relative mt-16">
        <h1 className="text-8xl md:text-[168px] md:leading-none bg-white font-semibold tracking-tighter bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(59,148,94,.5))] text-transparent bg-clip-text text-center">
          EcoSphere AI
        </h1>
        <p className="text-lg md:text-xl text-white/70 mt-5 text-center max-w-xl mx-auto">
          Empowering businesses with AI-driven calls, real-time data, and analysis for smarter growth.
        </p>
        <div className="flex justify-center mt-5 mb-9">
          <Button href="/home" className="text-white/70 bg-green-700 hover:bg-green-600">
            Try It!
          </Button>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
