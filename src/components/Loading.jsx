import React from "react";

const Loading = () => {
  return (
    <div className="m-auto">
      <div className="w-12 h-12 rounded-full animate-spin border-2 border-solid border-blue-500 border-t-transparent"/>
      <h3 className="text-lg font-bold mt-6">Loading...</h3>
    </div>
  );
};

export default Loading;
