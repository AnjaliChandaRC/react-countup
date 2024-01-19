import { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import CountUp from "react-countup";

export const CountUpMain = () => {
  const [viewCount, setViewCount] = useState(false);
  function onVisibilityChange(visible) {
    if (visible) {
      setViewCount(true);
    }
  }
  const counterData = [
    {
      plus: "%",
      para: "Pieces",
    },
    {
      plus: "+",
      para: "Worlds",
    },
    {
      plus: "%",
      para: "Skin Packs",
    },
    {
      plus: "+",
      para: "Rating",
    },
  ];
  return (
    <>
      <div className="min-vh-100 bg-black d-flex justify-content-center align-items-center">
        <p className="fs-1 fw-bold text-white">Start</p>
      </div>
      <div className="container py-5" id="work">
        <div className="row align-items-center justify-content-center counter_parent01 mx-auto mt-3 mt-sm-5 my-xl-5">
          {counterData.map((obj, index) => (
            <div
              key={index}
              className="col-6 col-md-3 mb-4 mb-md-2 mb-lg-0 text-center"
            >
              <div className="d-flex align-items-center justify-content-center">
                <div className="counter_box d-flex align-items-center justify-content-center flex-column">
                  <p className="fs-2 text-white mb-2 pb-md-1">
                    <VisibilitySensor
                      onChange={onVisibilityChange}
                      offset={{
                        top: 10,
                      }}
                      delayedCallon
                    >
                      <CountUp
                        start={0}
                        end={
                          index === 0
                            ? viewCount
                              ? 32
                              : 0
                            : index === 1
                            ? viewCount
                              ? 22
                              : 0
                            : index === 2
                            ? viewCount
                              ? 10
                              : 0
                            : index === 3
                            ? viewCount
                              ? 121500
                              : 0
                            : ""
                        }
                        duration={2}
                      />
                    </VisibilitySensor>
                    <span>{obj.plus}</span>
                  </p>
                  <p className="fs-2 text-white mb-0">{obj.para}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="min-vh-100 bg-black d-flex justify-content-center align-items-center">
        <p className="fs-1 fw-bold text-white">End</p>
      </div>
    </>
  );
};

export default CountUpMain;
