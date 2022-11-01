import { v4 as uuidv4 } from "uuid";
import Chart from "./Chart";

export default function Grid({ dashboards }) {
  console.log(dashboards.filter());
  return (
    <>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 p-20">
        {dashboards.map((dashboard) => (
          <Chart key={uuidv4()} dashboard={dashboard} />
        ))}
      </div>
    </>
  );
}
