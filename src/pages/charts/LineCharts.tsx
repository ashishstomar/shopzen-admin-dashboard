import Sidebar from "../../components/Sidebar";
import { LineChart } from "../../components/Charts";

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

const LineCharts = () => {
  return (
    <div className="admin-wrapper">
      <Sidebar />
      <main className="chart-container">
        <h1>Line Charts</h1>
        <section>
          <LineChart
            data={[
              756, 234, 678, 566, 986, 345, 122, 567, 976, 888, 1123, 1244,
            ]}
            label="Users"
            backgroundColor={`rgba(93, 53, 255, 0.31)`}
            borderColor={`rgba(93, 53, 255, 0.83)`}
            labels={months}
          />
          <h2>Active Users</h2>
        </section>
        <section>
          <LineChart
            data={[33, 23, 67, 56, 98, 34, 56, 97, 88, 21, 52, 33]}
            label="Products"
            backgroundColor={`rgba(255, 191, 53, 0.32)`}
            borderColor={`rgba(255, 184, 53, 0.83)`}
            labels={months}
          />
          <h2>Total SKUs </h2>
        </section>
        <section>
          <LineChart
            data={[
              13000, 23400, 67800, 56600, 48060, 34500, 66070, 87060, 50880,
              31023, 42044, 23455,
            ]}
            label="Revenue"
            backgroundColor={`rgba(5, 255, 101, 0.23)`}
            borderColor={`rgb(0, 254, 97)`}
            labels={months}
          />
          <h2>Total Revenue </h2>
        </section>
        <section>
          <LineChart
            data={[
              3322, 2443, 6247, 5326, 9338, 3434, 5536, 1537, 8358, 2351, 1352,
              3643,
            ]}
            label="Discount"
            backgroundColor={`rgba(255, 53, 93, 0.44)`}
            borderColor={`rgba(185, 0, 0, 0.83)`}
            labels={months}
          />
          <h2>Discount Alloted </h2>
        </section>
      </main>
    </div>
  );
};

export default LineCharts;
