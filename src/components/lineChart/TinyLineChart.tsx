import { Link } from "react-router-dom";
import "./tinyLineChart.scss";
import { ResponsiveContainer, LineChart, Line, Tooltip } from "recharts";

type Props = {
  color: string;
  icon: string;
  title: string;
  dataKey: string;
  number: number | string;
  percentage: number;
  chartData: {}[];
};

const TinyLineChart = (prop: Props) => {
  //
  return (
    <div className="tinyLineChart">
      <div className="boxInfo">
        <div className="title">
          <img src={prop.icon} alt="icon" />
          <span>{prop.title}</span>
        </div>
        <h2>{prop.number}</h2>
        <Link to="/" style={{ color: prop.color }}>
          View all
        </Link>
      </div>
      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={prop.chartData}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{ x: 8, y: 60 }}
              />
              <Line
                type="monotone"
                dataKey={prop.dataKey}
                stroke={prop.color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts">
          <span
            className="percentage"
            style={{ color: prop.percentage < 0 ? "tomato" : "limegreen" }}
          >
            {prop.percentage}
          </span>
          <span className="duration">this month</span>
        </div>
      </div>
    </div>
  );
};

export default TinyLineChart;
