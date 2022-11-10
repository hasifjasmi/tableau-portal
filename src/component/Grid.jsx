import Chart from "./Chart";
import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export default function Grid({ dash }) {
  const [parent] = useAutoAnimate(/* optional config */);
  const [dashboards, setDashboards] = useState(dash);
  console.log("DASH", dash);

  // receive tableau links
  function handleDelete(dashboard) {
    //
    setDashboards(dashboards.filter((dashb) => dashb != dashboard));
  }
  console.log("dashboard", dashboards);
  return (
    <>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 p-20" ref={parent}>
        {dashboards.map((dashboard) => (
          <Chart
            key={dashboard}
            dashboard={dashboard}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </>
  );
}
