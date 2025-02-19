import React from 'react';

const JoinButton = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative group">
        <button className="relative inline-block p-px font-semibold leading-6 text-white bg-neutral-900 shadow-lg cursor-pointer rounded-lg shadow-violet-500 transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 hover:shadow-blue-600">
          <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-pink-700 via-violet-500 to-cyan-300 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <span className="relative z-10 block px-6 py-1 rounded-lg bg-neutral-950">
            <div className="relative z-10 flex items-center space-x-3">
              <span className="transition-all duration-500 group-hover:translate-x-1.2 group-hover:text-cyan-300">Start Typing</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-cyan-300">
                <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
              </svg>
            </div>
          </span>
        </button>
      </div>
    </div>
  );
}

export default JoinButton;
