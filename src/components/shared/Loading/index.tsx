"use client";

import {CircularProgress} from "@mui/material";

const Loader = () => {
  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-1"
      style={{backgroundColor: "rgba(0, 0, 0, 0.5)"}}
    >
      <CircularProgress size="3rem" />
    </div>
  );
};

export default Loader;
