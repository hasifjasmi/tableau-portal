import Grid from "./component/Grid";
import { useState } from "react";

const dashboards = [
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

  return (
    <>
      <div className="navbar bg-green-300">
        <div className="navbar-start">
          <a className="btn btn-ghost normal-case text-xl">Spend Analytics</a>
        </div>
        <div className="navbar-end">
          <a className="btn">Login</a>
        </div>
      </div>
      <select
        className="select w-full max-w-xs"
        onChange={(e) => {
          setOption(e.target.value);
        }}
        value={option}
      >
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
      </select>
      <div className="bg-green-200">
        <Grid
          dashboards={
            dashboards.find((dashboard) => dashboard.option == option)?.tableau
          }
        />
      </div>
    </>
  );
}

export default App;
