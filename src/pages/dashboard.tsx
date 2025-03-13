import { BsSearch } from "react-icons/bs";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import { FaRegBell } from "react-icons/fa";
import userImg from "../assets/user.svg";
import inventoryData from "../assets/data.json";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";

const Dashboard = () => {
  console.log(inventoryData);
  const [input, setInput] = useState("");

  return (
    <div className="admin-wrapper">
      <Sidebar />
      <main className="dashboard">
        <div className="bar">
          <BsSearch />
          <input
            type="text"
            placeholder="Search"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <FaRegBell />
          <img src={userImg} />
        </div>
        <div>
          <section className="widget-container">
            <WidgetItem
              percent={40}
              value={2800}
              title="Revenue"
              color="rgb(0,115,255)"
            />
            <WidgetItem
              percent={70}
              value={3000}
              title="Revenue"
              color="rgb(4, 255, 63)"
            />
            <WidgetItem
              percent={-30}
              value={1500}
              title="Revenue"
              color="rgb(255, 5, 5)"
            />
            <WidgetItem
              percent={20}
              value={2000}
              title="Revenue"
              color="rgb(0,115,255)"
            />
          </section>
        </div>
        <section className="graph-container">
          <div className="chart-revenue">
            <h2>Revenue & Transactions</h2>
            {/* Graph */}
          </div>
          <div className="inventory">
            <h2>Inventory</h2>
            <div>
              {inventoryData.inventoryItems.map((item) => (
                <InventoryItem
                  key={item.title}
                  title={item.title}
                  value={item.value}
                  color={`hsl(${item.value * 4}, ${item.value}%, 50%)`}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

interface widgetItemProps {
  title: string;
  value: number;
  percent: number;
  color: string;
  amount?: boolean;
}

const WidgetItem = ({
  title,
  value,
  percent,
  color,
  amount = false,
}: widgetItemProps) => (
  <article className="widget">
    <div className="widget-info">
      <p>{title}</p>
      <h4>{amount ? `$${value}` : value} </h4>
      {percent > 0 ? (
        <span className="green">
          <HiTrendingUp /> + {percent}%{" "}
        </span>
      ) : (
        <span className="red">
          <HiTrendingDown /> {percent}%{" "}
        </span>
      )}
    </div>
    <div
      className="widget-circle"
      style={{
        background: `conic-gradient(${color} ${
          Math.abs(percent / 100) * 360
        }deg, rgb(243, 243, 243) 0)`,
      }}
    >
      <span style={{ color: color }}>{percent}%</span>
    </div>
  </article>
);

interface inventoryItemProps {
  color: string;
  value: number;
  title: string;
}

const InventoryItem = ({ color, value, title }: inventoryItemProps) => (
  <div className="inventory-item">
    <h5>{title}</h5>
    <div>
      <div
        style={{
          backgroundColor: color,
          width: `${value}%`,
        }}
      ></div>
    </div>
    <span>{value}%</span>
  </div>
);

export default Dashboard;
