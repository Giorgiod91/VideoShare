"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";
import { InstagramEmbed } from "react-social-media-embed";

type Props = {};

function Video({}: Props) {
  const [input, setInput] = useState("");
  const [refreshKey, setRefreshKey] = useState(0);

  // Function to remove the username from the instagram URL
  const processInstagramURL = (url: string) => {
    const regex = /https:\/\/www\.instagram\.com\/[^/]+\//;
    return url.replace(regex, "https://www.instagram.com/");
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
  // im giving the motion div a key to force re-render when the key changes

  return (
    <div className="border-primary relative mx-auto h-[600px] max-h-screen w-[700px] rounded-xl border-4 border-red-500 bg-white p-4 shadow-lg">
      <div className="display flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg pt-10 shadow-lg">
        <div className="h-full w-full">
          <motion.div
            className="h-full w-full overflow-hidden rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            key={refreshKey}
          >
            {input.includes("youtube.com") ? (
              <ReactPlayer
                url={getEmbedURL(input)}
                width="100%"
                height="100%"
                controls
                className="overflow-hidden rounded-lg"
              />
            ) : null}
            {input.includes("instagram.com") ? (
              <div className="h-full w-full">
                <InstagramEmbed
                  url={getEmbedURL(input)}
                  width="100%"
                  height="100%"
                  className="overflow-hidden rounded-lg"
                />
              </div>
            ) : null}
          </motion.div>
        </div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter video URL"
          className="mt-4 w-11/12 rounded border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <a className="btn btn-wide mt-4 flex items-center justify-center rounded-md bg-gradient-to-r from-pink-500 to-red-500 p-2 text-white shadow-lg hover:from-pink-600 hover:to-red-600">
          Show Video
        </a>
        <button
          onClick={handleRewatch}
          className="absolute rounded-md bg-red-500 p-2 text-white shadow-md hover:bg-red-600 lg:right-2 lg:top-2"
        >
          ReWatch
        </button>
      </div>
    </div>
  );
}

export default Video;
