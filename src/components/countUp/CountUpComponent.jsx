import React from "react";
import CountUp from "react-countup";

function CountUpComponent({ start, end, duration }) {
  return (
    <CountUp
      start={start}
      end={end}
      duration={duration}
      separator=""
      decimals={0}
      decimal=""
      prefix=""
      suffix=""
      enableScrollSpy={true}
      scrollSpyOnce={true}
      redraw={false}
      // preserveValue={true}
      // redraw={true}
      // startOnMount={false}
      // onEnd={() => console.log("Ended! 👏")}
      // onStart={() => console.log("Started! 💨")}
    >
      {({ countUpRef, start }) => (
        <div className="">
          <span
            ref={countUpRef}
            className="text-5xl font-bold text-[--bgc-dark]"
          />
        </div>
      )}
    </CountUp>
  );
}

export default CountUpComponent;
