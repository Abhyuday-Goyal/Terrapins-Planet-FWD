import React from 'react';
import Logo from '../assets/logo.png';
import Menu from '../assets/menu.png';
import Button from './items/Button';

export const MainHeader = ({
  scrollToHome,
  scrollToFeatures,
  scrollToContact,
}) => {
  return (
    <header
      className="py-4 border-b border-[#3B945E]/50 sticky top-0 z-10"
      style={{
        background: 'linear-gradient(to right, #3B945E, #2C6E49)',
      }}
    >
      <div className="absolute inset-0 backdrop-blur -z-10"></div>
      <div className="container">
        <div className="flex justify-between items-center rounded-xl max-w-2xl mx-auto relative">
          <div>
            <div className="border h-10 w-10 rounded-lg inline-flex justify-center items-center border-[#2C6E49]/50">
              <img src={Logo} alt="Logo" className="h-8 w-8" />
            </div>
          </div>

          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm">
              <button
                onClick={scrollToHome}
                className="text-white/70 hover:text-white transition"
              >
                Home
              </button>
              <button
                onClick={scrollToFeatures}
                className="text-white/70 hover:text-white transition"
              >
                Features
              </button>
              <button
                onClick={scrollToContact}
                className="text-white/70 hover:text-white transition"
              >
                Contact
              </button>
            </nav>
          </div>
          <div className="flex gap-4 items-center">
            <Button href="/home" className="bg-[#3B945E] hover:bg-[#2C6E49] text-white">
              Join Now
            </Button>

            <div>
              <img src={Menu} alt="Menu" className="h-8 w-8 md:hidden" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
