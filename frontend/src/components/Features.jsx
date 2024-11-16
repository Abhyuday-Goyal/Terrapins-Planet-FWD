'use client';
import { DotLottiePlayer } from '@dotlottie/react-player';
import product from '../assets/product.png';

const tabs = [
  {
    icon: '/assets/lottie/graph.lottie',
    title: 'User-friendly Dashboard',
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: '/assets/lottie/speed.lottie',
    title: 'Real-time Response',
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: '/assets/lottie/Animation.lottie',
    title: 'Smart Manager',
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];

export const Features = () => {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-[#059033] to-[#5b98d6]">
      <div className="container text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tighter">
          Elevate Your Sustainability Goals
        </h2>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto tracking-tight mt-5">
          Transform Operations with AI-Driven Insights and Real-Time Solutions
        </p>

        {/* Feature Tabs */}
        <div className="mt-10 flex flex-col lg:flex-row gap-4">
          {tabs.map((tab) => (
            <div
              key={tab.title}
              className="border border-white/25 bg-white/10 rounded-xl p-4 flex items-center gap-4 lg:flex-1 hover:shadow-lg hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="h-14 w-14 flex items-center justify-center rounded-lg bg-white/20 border border-white/20">
                <DotLottiePlayer
                  src={tab.icon}
                  className="h-6 w-6"
                  autoplay
                />
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold text-white">{tab.title}</h3>
                {tab.isNew && (
                  <span className="inline-block text-xs font-semibold text-black bg-[#8c44ff] px-2 py-1 rounded ml-2">
                    NEW
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Dashboard Preview */}
        <div className="border border-white/25 bg-white/10 rounded-xl mt-12 p-4">
          <div
            className="aspect-video rounded-lg bg-cover bg-center shadow-lg"
            style={{
              backgroundImage: `url(${product})`,
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};
