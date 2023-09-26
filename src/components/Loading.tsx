import React from "react";

const Loading = () => {
  return (
    <div className="Center grid place-content-center">
      <img
        src={"/spinner.svg"}
        width={100}
        height={100}
        className="z-10"
        alt="spinner"
      />
    </div>
  );
};

export default Loading;
