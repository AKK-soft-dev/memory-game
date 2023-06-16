import React from "react";

// Poor accessibility
function ProgressBar({ min, max }, ref) {
  return (
    <div
      className="progress"
      role="progressbar"
      aria-label="Showing loaded resources progress"
      aria-valuemin={min}
      aria-valuemax={max}
    >
      <div className="progress-bar progress-bar-striped" ref={ref}></div>
    </div>
  );
}

export default React.forwardRef(ProgressBar);
