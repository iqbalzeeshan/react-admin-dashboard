import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from "recharts";
import "./single.scss";

type Props = {
  id: number;
  title: string;
  img?: string;
  info?: {
    username: string;
    fullname: string;
    email: string;
    phone: string;
    status: string;
  };
  chart?: {
    dataKeys: { name: string; color: string }[];
    data: { name: string; visits: number; clicks: number }[];
  };
  activities?: { text: string; time: string }[];
};

const Single = (prop: Props) => {
  return (
    <div className="single">
      <div className="view">
        <div className="info">
          <div className="topInfo">
            <img src={prop.img} alt="item-image" />
            <h3>{prop.title}</h3>
            <button>Update</button>
          </div>
          <div className="details">
            {Object.entries(prop.info).map((item, index) => (
              <div className="item" key={index}>
                <span className="itemTitle">{item[0]}:</span>
                <span className="itemValue">{item[1]}:</span>
              </div>
            ))}
            {/* <div className="item">
              <span className="itemTitle">{prop.info?.username}:</span>
              <span className="itemValue">{prop.info?.fullname}:</span>
            </div> */}
          </div>
        </div>
        <hr />
        {prop.chart && (
          <div className="chart">
            <ResponsiveContainer>
              <LineChart
                width={500}
                height={300}
                data={prop.chart.data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                {prop.chart.dataKeys.map((data, index) => (
                  <Line
                    key={index}
                    type="monotone"
                    dataKey={data.name}
                    stroke={data.color}
                    activeDot={{ r: 8 }}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
      <div className="activities">
        <h2>Latest Activities</h2>
        {prop.activities && (
          <ul>
            {prop.activities.map((activity, index) => (
              <li key={index}>
                <div>
                  <p>{activity.text}.</p>
                  <time>{activity.time}</time>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Single;
