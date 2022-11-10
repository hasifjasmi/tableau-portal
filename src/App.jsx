import Grid from "./component/Grid";
import { useState } from "react";

const refreshPage = () => {
  window.location.reload();
};

const Dashboard1 =
  "https://public.tableau.com/views/Book2_16662365125770/Dashboard1?:language=en-US&:display_count=n&:origin=viz_share_link";
const Dashboard2 =
  "https://public.tableau.com/views/4_16637410137820/Dashboard9?:language=en-US&:display_count=n&:origin=viz_share_link";
const Dashboard3 =
  "https://public.tableau.com/views/2_16637263565920/Dashboard10?:language=en-US&:display_count=n&:origin=viz_share_link";
const Dashboard4 =
  "https://public.tableau.com/views/SpendbyMonthcheckbox/Dashboard15?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link";
const Dashboard5 =
  "https://public.tableau.com/views/8_16642482406220/TopVendors?:language=en-US&:display_count=n&:origin=viz_share_link";
const Dashboard6 =
  "https://public.tableau.com/views/9_16642484376460/TopSpendCategories?:language=en-US&:display_count=n&:origin=viz_share_link";
const Dashboard7 =
  "https://public.tableau.com/views/SpendbyMonth/Dashboard14?:language=en-US&:display_count=n&:origin=viz_share_link";
const Dashboard8 =
  "https://public.tableau.com/views/7_16642480068940/Dashboard12?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link";
const Dashboard9 =
  "https://public.tableau.com/views/Book2_16662365125770/Dashboard1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link";

const dashboards = [
  {
    option: 1,
    tableau: [
      // new dashboard
      Dashboard1,
      //palato paralysis
      Dashboard2,
      //Total Spend Trends by Spend Category
      Dashboard3,
      // Spend by Month (checkbox)
      Dashboard4,
    ],
  },
  {
    option: 2,
    tableau: [
      //Top Vendor
      Dashboard5,
      //Top Spend by Category
      Dashboard6,
      //Spend by Month
      Dashboard7,
    ],
  },
  {
    option: 3,
    tableau: [
      //Category bar chart
      Dashboard8,
      //Dasboard
      Dashboard9,
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
        <option value={1}>first</option>
        <option value={2}>second</option>
        <option value={3}>third</option>
      </select>
      <div className="navbar bg-green-200">
        <div className="navbar-end">
          <button onClick={refreshPage} className="btn btn-sm">
            Reset
          </button>
        </div>
      </div>
      <div className="bg-green-200">
        <Grid
          dash={
            dashboards.find((dashboard) => dashboard.option == option)?.tableau
          }
        />
      </div>
    </>
  );
}

export default App;
