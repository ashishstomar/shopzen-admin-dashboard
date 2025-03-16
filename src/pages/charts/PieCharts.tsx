import Sidebar from "../../components/Sidebar";
import { DoughnutChart, PieChart } from "../../components/Charts";
import { inventoryItems } from "../../assets/data.json";
const PieCharts = () => {
  return (
    <div className="admin-wrapper">
      <Sidebar />
      <main className="chart-container">
        <h1>Pie & Doughnut Charts</h1>
        <section>
          <div>
            <PieChart
              labels={["Processing", "Shipped", "Deliverd"]}
              data={[12, 9, 13]}
              backgroundColor={[
                `hsla(110, 80.40%, 50.00%, 0.27)`,
                `hsla(110, 80.40%, 40.00%, 0.67)`,
                `hsla(110, 50.30%, 30.00%, 0.42)`,
              ]}
              offset={[0, 0, 50]}
            />
          </div>
          <h2>Order Fulfillment Ratio</h2>
        </section>
        <section>
          <div>
            <DoughnutChart
              labels={inventoryItems.map((cat) => cat.title)}
              data={inventoryItems.map((cat) => cat.value)}
              backgroundColor={inventoryItems.map(
                (cat) => `hsla(${cat.value * 24},${cat.value}%, 50.00%, 0.69)`
              )}
              legends={false}
              offset={[0, 0, 0, 80]}
            />
          </div>
          <h2>Product Category Ratio</h2>
        </section>
        <section>
          <div>
            <DoughnutChart
              labels={["Out Of Stock", "In Stock"]}
              data={[111, 180]}
              backgroundColor={[
                `hsla(4, 86.40%, 53.70%, 0.67)`,
                `hsla(108, 58.50%, 40.60%, 0.67)`,
              ]}
              legends={false}
              offset={[0, 80]}
              cutout={"70%"}
            />
          </div>
          <h2>Product Stock Ratio</h2>
        </section>
        <section>
          <div>
            <DoughnutChart
              labels={[
                "Marketing Cost",
                "Discount",
                "Burnt",
                "Production Cost",
                "Net Margin",
              ]}
              data={[111, 180, 345, 214, 634]}
              backgroundColor={[
                "rgb(53, 162, 255)",
                "rgb(53, 255, 221)",
                "rgb(124, 53, 255)",
                "rgb(53, 104, 255)",
                "rgb(53, 70, 255)",
              ]}
              legends={false}
              offset={[20, 30, 20, 30, 80]}
            />
          </div>
          <h2>Revenue Distribution</h2>
        </section>
        <section>
          <div>
            <PieChart
              labels={[
                "Teenager(Below 20)",
                "Adult(Below 20-40)",
                "Older(Over 40)",
              ]}
              data={[30, 250, 70]}
              backgroundColor={[
                `hsla(56, 100.00%, 50.00%, 0.59)`,
                `hsla(40, 90.40%, 50.80%, 0.67)`,
                `hsla(21, 100.00%, 57.60%, 0.42)`,
              ]}
              offset={[0, 0, 50]}
            />
          </div>
          <h2>ge Group Ratio Of Users</h2>
        </section>
        <section>
          <div>
            <DoughnutChart
              labels={["Admin", "Customers"]}
              data={[45, 255]}
              backgroundColor={[
                `hsla(193, 86.40%, 53.70%, 0.67)`,
                `hsla(269, 72.50%, 41.40%, 0.67)`,
              ]}
              offset={[0, 80]}
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default PieCharts;
