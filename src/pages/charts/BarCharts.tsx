import Sidebar from "../../components/Sidebar";
import { BarChart } from "../../components/Charts";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

const BarCharts = () => {
  return (
    <div className="admin-wrapper">
      <Sidebar />
      <main className="chart-container">
        <h1>Bar Charts</h1>
        <section>
          <BarChart
            data_1={[756, 234, 678, 566, 986, 345, 567]}
            data_2={[345, 345, 453, 687, 345, 888, 345]}
            title_1="Products"
            title_2="Users"
            bgColor_1={`hsla(247, 97.10%, 40.00%, 0.56)`}
            bgColor_2={`hsl(255, 96.70%, 88.00%)`}
          />
          <h2>Best Selling Products & Top Customers</h2>
        </section>
        <section>
          <BarChart
            horizontal={true}
            data_1={[
              355, 456, 234, 576, 234, 756, 234, 678, 566, 986, 345, 567,
            ]}
            data_2={[]}
            title_1="Products"
            title_2=""
            bgColor_1={`hsla(241, 97.10%, 40.00%, 0.65)`}
            bgColor_2=""
            labels={months}
          />
          <h2>Best Selling Products & Top Customers</h2>
        </section>
      </main>
    </div>
  );
};

export default BarCharts;
