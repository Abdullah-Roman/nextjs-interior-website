"use client";
import CountUp from "react-countup";
const CounterUp = ({ className, end, text, line }) => {
  return (
    <>
      <div className={`${className}`}>
        <CountUp end={end} duration={4} delay={0.5} />
        {text}
      </div>
      <p className="text-white">{line}</p>
    </>
  );
};

export default CounterUp;
