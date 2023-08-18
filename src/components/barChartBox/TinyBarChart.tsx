import { ResponsiveContainer, Bar, BarChart, Tooltip } from "recharts";
import "./tinyBarChart.scss";

type Props = {
  title: string;
  color: string;
  dataKey: string;
  chartData: {}[];
};

const TinyBarChart = (prop: Props) => {
  return (
    <div className="tinyBarChart">
      <h2>{prop.title}</h2>
      <div className="chart">
        <ResponsiveContainer width="99%" height={150}>
          <BarChart data={prop.chartData}>
            <Tooltip
              contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
              labelStyle={{ display: "none" }}
              position={{ x: 8, y: 60 }}
              cursor={{ fill: "none" }}
            />
            <Bar dataKey={prop.dataKey} fill={prop.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TinyBarChart;
