"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";
import { InstagramEmbed, TikTokEmbed } from "react-social-media-embed";

function Video() {
  const [input, setInput] = useState("");
  const [refreshKey, setRefreshKey] = useState(0);

  // Function to remove the username from the Instagram URL
  const processInstagramURL = (url: string) => {
    const reelRegex = /https:\/\/www\.instagram\.com\/[^/]+\/reel\/([^/]+)/;
    if (reelRegex.test(url)) {
      const match = url.match(reelRegex);
      if (match) {
        return `https://www.instagram.com/reel/${match[1]}/`;
      }
    }
    return url;
  };
  const getEmbedURL = (url: string) => {
    if (url.includes("instagram.com")) {
      return processInstagramURL(url);
    }
    return url;
  };

  const handleRewatch = () => {
    setRefreshKey((prevKey) => prevKey + 1); // Increment the key to force re-render
  };

  const resetButton = () => {
    setInput("");
  };

  // TODO: Add support for more video platforms
  // TODO: add this button <a className="btn btn-wide mt-4 flex items-center justify-center rounded-md bg-gradient-to-r from-pink-500 to-red-500 p-2 text-white shadow-lg hover:from-pink-600 hover:to-red-600"> Show Video </a>

  return (
    <div className="relative mx-auto flex max-h-screen w-[490px] flex-col items-center justify-center rounded-xl border-4 border-orange-400 bg-white p-4 shadow-lg">
      <div className="flex w-full flex-col items-center justify-center overflow-hidden rounded-lg pt-10 shadow-lg">
        <div
          className="tooltip tooltip-open rounded-lg bg-black p-2 text-white"
          data-tip="tap in the middle of the video to play/pause"
        ></div>
        <div className="relative w-full">
          <motion.div
            className="overflow-hidden rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            key={refreshKey}
          >
            {input.includes("youtube.com") ? (
              <ReactPlayer
                url={getEmbedURL(input)}
                width="100%"
                height={450}
                controls
                className="overflow-hidden rounded-lg"
              />
            ) : null}
            {input.includes("instagram.com") ? (
              <div className="flex h-[450px] justify-center pb-3">
                <InstagramEmbed
                  url={getEmbedURL(input)}
                  className="overflow-hidden rounded-lg"
                  captioned
                />
              </div>
            ) : null}
            {input.includes("tiktok.com") ? (
              <div className="flex h-[450px] justify-center pb-3">
                <TikTokEmbed url={getEmbedURL(input)} />
              </div>
            ) : null}
          </motion.div>
        </div>
        <div className="mt-4 flex w-full justify-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter video URL"
            className="w-full max-w-[400px] rounded border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button
            onClick={handleRewatch}
            className="btn-wide ml-4 rounded-md bg-gradient-to-r from-red-500 to-orange-500 p-2 text-white shadow-md lg:ml-2"
          >
            ReWatch
          </button>
          <button
            onClick={resetButton}
            className="btn-wide ml-4 rounded-md bg-gradient-to-r from-red-500 to-orange-500 p-2 text-white shadow-md lg:ml-2"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Video;
