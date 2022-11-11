// import Grid from "./component/Grid";
import Chart from "../src/component/Chart";
import { useState } from "react";
import { useAutoAnimate } from '@formkit/auto-animate/react'

const listDashboards = [
  {
    option: 1,
    tableau: [
      // new dashboard
      "https://public.tableau.com/views/Book2_16662365125770/Dashboard1?:language=en-US&:display_count=n&:origin=viz_share_link",
      //palato paralysis
      "https://public.tableau.com/views/4_16637410137820/Dashboard9?:language=en-US&:display_count=n&:origin=viz_share_link",
      //Total Spend Trends by Spend Category
      "https://public.tableau.com/views/2_16637263565920/Dashboard10?:language=en-US&:display_count=n&:origin=viz_share_link",
      // Spend by Month (checkbox)
      "https://public.tableau.com/views/SpendbyMonthcheckbox/Dashboard15?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link",
    ],
  },
  {
    option: 2,
    tableau: [
      //Top Vendor
      "https://public.tableau.com/views/8_16642482406220/TopVendors?:language=en-US&:display_count=n&:origin=viz_share_link",
      //Top Spend by Category
      "https://public.tableau.com/views/9_16642484376460/TopSpendCategories?:language=en-US&:display_count=n&:origin=viz_share_link",
      //Spend by Month
      "https://public.tableau.com/views/SpendbyMonth/Dashboard14?:language=en-US&:display_count=n&:origin=viz_share_link",
    ],
  },
  {
    option: 3,
    tableau: [
      //Category bar chart
      "https://public.tableau.com/views/7_16642480068940/Dashboard12?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link",
      //Dasboard
      "https://public.tableau.com/views/Book2_16662365125770/Dashboard1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link",
    ],
  },
];


function App() {
  const [option, setOption] = useState(1);
  const [dashboards, setDashboards] = useState(listDashboards.find(dashboard=>dashboard.option === 1).tableau);
  const [parent] = useAutoAnimate();

  return (
    <>
      <div className="navbar bg-green-300">
        <div className="navbar-start">
          <a className="btn btn-ghost normal-case text-xl text-base-200" href="/">Spend Analytics</a>
        </div>
        <div className="navbar-end">
          {/* <a className="btn">Login</a> */}
        </div>
      </div>
      <select
        className="select w-full max-w-xs"
        onChange={(e) => {
          setOption(e.target.value);
          setDashboards(listDashboards.find(dashboard=>dashboard.option === Number(e.target.value)).tableau)
        }}
        value={option}
      >
        <option value={1}>first</option>
        <option value={2}>second</option>
        <option value={3}>third</option>
      </select>
      <div className="bg-green-200">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 p-20" ref={parent}>
            {dashboards.map((dashboard) => (
                <Chart
                    key={dashboard}
                    dashboard={dashboard}
                    height="800px"
                    width="650px"
                    dashboards={dashboards}
                    setDashboards={setDashboards}
                />
            ))}
        </div>
      </div>
    </>
  );
}

export default App;
