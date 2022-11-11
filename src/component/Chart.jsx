import { useRef, useEffect, useState } from "react";
// import ricardo from "./c57.gif";

const { tableau } = window;

export default function Chart({ dashboard, height, width, dashboards, setDashboards }) {
  const ref = useRef(null);
  // swap function
  const [swap, setSwap] = useState(true);

  //
  useEffect(() => {
    const viz = new tableau.Viz(ref.current, `${dashboard}`, {
      hideToolbar: true,
      hideTabs: true,
      height,
      width,
    });

    // return viz; removing this seems to fix the problem lol.
  }, [dashboard, width, height]);

  return (
    <>
      <div className="flex flex-col w-[660px] bg-base-100">
        {/* buttons */}
        <div className="flex flex-row-reverse ">
          <button
            onClick={() => {
                console.log(dashboard);
                setDashboards(dashboards.filter(dash=>dash !== dashboard));
            }}
            className="btn btn-square align-items-right"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* expand button */}
          <a href={dashboard}>
            <button className="btn btn-square">
              <i className="fa-solid fa-expand"></i>
            </button>
          </a>

          {/* flip button */}
          <button
            onClick={() => {
              setSwap(!swap);
            }}
            className="btn btn-square "
          >
            <i className="fa-solid fa-repeat"></i>
          </button>
        </div>

        <label
          className={`swap ${swap ? "swap-active" : ""} swap-flip text-9xl`}
        >
          <div
            className="border-2 border-red-700 bg-white swap-on w-[660px]"
            ref={ref}
          ></div>
          <div className="flex border-2 border-red-700 bg-white swap-off">
            <p className="text-base"> try test testing</p>
          </div>
        </label>
      </div>
    </>
  );
}
