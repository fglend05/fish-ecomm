import React from "react";
import ChatIcon from "@mui/icons-material/Chat";
import CommentIcon from "@mui/icons-material/Comment";
import StyleIcon from "@mui/icons-material/Style";

const ForumData = () => {
  return (
    <div className="relative">
      <div className="flex flex-col">
        <div className="flex-[0.3] ">
          <div className="w-full h-[150px] bg-zinc-400">
            <div className="text-center pt-10">
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
                Welcome to FishCommerce!
              </h1>
            </div>
          </div>
        </div>
        <div className="flex-[0.7]">
          <div className="flex bg-zinc-300">
            <div className="flex-[0.3]">
              <div className="py-10 px-16">
                <button className="defButton py-4 px-10">
                  <div className="flex">
                    <div className=" pr-3">
                      <ChatIcon />
                    </div>
                    Start A Discussion
                  </div>
                </button>
                <div>
                  <button className="buttonTwo pr-5">
                    <div className="pr-3">
                      <CommentIcon />
                    </div>
                    All Discussions
                  </button>
                  <button className="buttonTwo pr-5">
                    <div className="pr-3">
                      <StyleIcon />
                    </div>
                    Tags
                  </button>
                </div>
                <div className="mt-5 ml-5"></div>
              </div>
            </div>
            <div className="flex-[0.5]"></div>
            <div className="flex-[0.2]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForumData;
