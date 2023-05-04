export default function ProgressBar({ current, min, max }) {
  return (
    <div
      className="progress"
      role="progressbar"
      aria-label="Showing loaded resources progress"
      aria-valuenow={current}
      aria-valuemin={min}
      aria-valuemax={max}
    >
      <div
        className="progress-bar progress-bar-striped"
        style={{ width: `${current}%` }}
      ></div>
    </div>
  );
}
