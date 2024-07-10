"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";
import { InstagramEmbed } from "react-social-media-embed";

type Props = {};

function Video({}: Props) {
  const [input, setInput] = React.useState("");

  return (
    <div className="border-primary relative mx-auto h-[400px] max-h-screen w-[700px]">
      <div className="display flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg pt-10 shadow-lg">
        <div className="h-full w-full">
          <motion.div
            className="h-full w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {input.includes("youtube.com") ? (
              <ReactPlayer url={input} width="100%" height="100%" controls />
            ) : null}
            {input.includes("instagram.com") ? (
              <InstagramEmbed url={input} width="100%" height="100%" />
            ) : null}
          </motion.div>
        </div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter video URL"
          className="mt-4 w-11/12 rounded border p-2"
        />
        <a className="btn btn-wide flex items-center rounded-md bg-[#FA50B5] text-black">
          Show Video
        </a>
      </div>
    </div>
  );
}
export default Video;
