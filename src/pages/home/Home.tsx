import TinyBarChart from "../../components/barChart/TinyBarChart";
import TinyLineChart from "../../components/lineChart/TinyLineChart";
import TopBox from "../../components/topbox/TopBox";
import {
  chartBoxUser,
  chartBoxProduct,
  chartBoxConversion,
  chartBoxRevenue,
  barChartBoxRevenue,
  barChartBoxVisit,
} from "../../data";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox />
      </div>
      <div className="box box2">
        <TinyLineChart {...chartBoxUser} />
      </div>
      <div className="box box3">
        <TinyLineChart {...chartBoxProduct} />
      </div>
      <div className="box box4">Box4</div>
      <div className="box box5">
        <TinyLineChart {...chartBoxRevenue} />
      </div>
      <div className="box box6">
        <TinyLineChart {...chartBoxConversion} />
      </div>
      <div className="box box7">Box7</div>
      <div className="box box8">
        <TinyBarChart {...barChartBoxVisit} />
      </div>
      <div className="box box9">
        <TinyBarChart {...barChartBoxRevenue} />
      </div>
    </div>
  );
};

export default Home;
