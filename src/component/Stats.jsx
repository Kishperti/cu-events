
import React, { useState, useEffect } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

export default function Stats() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);

  const startCounting = (isVisible, setCountFunction, finalCount, step = 10, interval = 50) => {
    if (isVisible && setCountFunction && finalCount > 0) {
      let currentCount = 0;
      const intervalId = setInterval(() => {
        currentCount += Math.floor(Math.random() * step);
        setCountFunction(currentCount);
        if (currentCount >= finalCount) {
          clearInterval(intervalId);
          setCountFunction(finalCount);
        }
      }, 0);
    }
  };

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 w-full py-[50px] px-[20px] bg-[#0e0d0d]">
      <VisibilitySensor
        onChange={(isVisible) => startCounting(isVisible, setCount1, 10000,)}
        partialVisibility
      >
        <div className="flex flex-col w-full items-center justify-center">
          <h1 className="text-xl md:text-5xl font-medium text-[#E2012D] font-oswald">{count1}+</h1>
          <div className="text-base md:text-2xl font-light text-white font-maven w-full mt-4 text-center">
            Total Participation
          </div>
        </div>
      </VisibilitySensor>
      <VisibilitySensor
        onChange={(isVisible) => startCounting(isVisible, setCount2, 500)}
        partialVisibility
      >
        <div className="flex flex-col w-full items-center justify-center">
          <h1 className="text-xl md:text-5xl font-medium text-[#E2012D] font-oswald">{count2}+</h1>
          <div className="text-base md:text-2xl font-light text-white font-maven w-full mt-4 text-center">
            Achievements
          </div>
        </div>
      </VisibilitySensor>
      <VisibilitySensor
        onChange={(isVisible) => startCounting(isVisible, setCount3, 9000)}
        partialVisibility
      >
        <div className="flex flex-col w-full items-center justify-center">
          <h1 className="text-xl md:text-5xl font-medium text-[#E2012D] font-oswald">{count3}+</h1>
          <div className="text-base md:text-2xl font-light text-white font-maven w-full mt-4 text-center">
            National Participation
          </div>
        </div>
      </VisibilitySensor>
      <VisibilitySensor
        onChange={(isVisible) => startCounting(isVisible, setCount4, 1000)}
        partialVisibility
      >
        <div className="flex flex-col w-full items-center justify-center">
          <h1 className="text-xl md:text-5xl font-medium text-[#E2012D] font-oswald">{count4}+</h1>
          <div className="text-base md:text-2xl font-light text-white font-maven w-full mt-4 text-center">
            International Participation
          </div>
        </div>
      </VisibilitySensor>
    </div>
  );
}
