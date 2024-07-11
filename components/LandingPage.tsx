import React from "react";
import Video from "./Video";

function LandingPage() {
  return (
    <div className="mx-auto flex flex-col items-center justify-center gap-16 bg-gray-900 px-6 py-12 text-white sm:px-8 lg:flex-row lg:justify-between lg:px-20 xl:px-32">
      <div className="h-2 w-full bg-gradient-to-r from-orange-500 to-red-500"></div>
      <div className="mx-auto max-w-4xl text-center lg:text-left">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
          Just
          <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            Watch
          </span>
        </h1>
        <h2 className="mb-8 text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl">
          Watch Videos from Instagram, YouTube, Tiktok
        </h2>
        <p className="mb-8 text-lg leading-relaxed opacity-80">
          Watch videos without the hassle of logging in. You're in the right
          place.
        </p>
        <a
          href=""
          className="btn btn-wide flex items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-orange-500 px-6 py-3 text-lg font-bold text-white transition duration-300 ease-in-out hover:from-orange-500 hover:to-red-500 hover:text-white"
        >
          Start Watching<span className="ml-2">&#8594;</span>
        </a>
      </div>
      <div className="relative w-full max-w-3xl">
        <Video />
      </div>
      <div className="h-2 w-full bg-gradient-to-l from-red-500 to-orange-500"></div>
    </div>
  );
}

export default LandingPage;
