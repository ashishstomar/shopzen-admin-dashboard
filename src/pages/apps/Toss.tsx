import { useState } from "react";
import Sidebar from "../../components/Sidebar";

const Toss = () => {
  const [angle, setAngle] = useState<number>(0);

  const flip = () => {
    if (Math.random() > 0.5) setAngle((prev) => prev + 180);
    else setAngle((prev) => prev + 360);
  };
  return (
    <div className="admin-wrapper">
      <Sidebar />
      <main className="app-container">
        <h1>Flip A Coin</h1>
        <section>
          <article
            className="toss"
            onClick={flip}
            style={{ transform: `rotateY(${angle}deg)` }}
          >
            <div></div>
            <div></div>
          </article>
        </section>
      </main>
    </div>
  );
};

export default Toss;
