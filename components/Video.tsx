"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";
import { InstagramEmbed } from "react-social-media-embed";

type Props = {};

function Video({}: Props) {
  const [input, setInput] = React.useState("");

  return (
    <div className="flex flex-col">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {input.includes("youtube.com") ? (
          <ReactPlayer
            url={input}
            width="100%"
            height="100%"
            controls
            playing
          />
        ) : null}
        {input.includes("instagram.com") ? (
          <InstagramEmbed url={input} />
        ) : null}
      </motion.div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter video URL"
      />
    </div>
  );
}
export default Video;
