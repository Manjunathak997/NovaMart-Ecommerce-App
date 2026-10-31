import React from "react";

const NewsLetter = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-2 py-12 px-4 mb-14 rounded-3xl bg-violet-50">
      <h1 className="md:text-4xl text-2xl font-medium">
        Join the NovaMart Club & save 20%
      </h1>
      <p className="md:text-base text-gray-500/80 pb-8">
        Get early access to new arrivals, member-only deals and tech tips.
      </p>
      <div className="flex items-center justify-between max-w-2xl w-full md:h-14 h-12">
        <input
          className="border border-gray-500/30 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-3 text-gray-500"
          type="text"
          placeholder="Your email address"
        />
        <button className="md:px-12 px-8 h-full text-white bg-violet-600 hover:bg-violet-700 transition rounded-md rounded-l-none">
          Join now
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
