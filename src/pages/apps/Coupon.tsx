import { FormEvent, useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const symbols = "!@#$%^&*()_+";

const Coupon = () => {
  const [size, setSize] = useState<number>(8);
  const [prefix, setPrefix] = useState<string>("");
  const [coupon, setCoupon] = useState<string>("");
  const [includeNum, setIncludeNum] = useState<boolean>(false);
  const [includeChar, setIncludeChar] = useState<boolean>(false);
  const [includeSym, setIncludeSym] = useState<boolean>(false);
  const [isCopy, setIsCopy] = useState<boolean>(false);

  useEffect(() => {
    setIsCopy(false);
  }, [coupon]);

  const textCopy = async (coupon: string) => {
    await window.navigator.clipboard.writeText(coupon);
    setIsCopy(true);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!includeNum && !includeSym && !includeChar)
      return alert("Please check at least one option");

    let result: string = prefix || "";
    const loopLength: number = size - result.length;

    for (let i = 0; i < loopLength; i++) {
      let entireString: string = "";
      if (includeChar) entireString += letters;
      if (includeNum) entireString += numbers;
      if (includeSym) entireString += symbols;

      const randomNum: number = ~~(Math.random() * entireString.length);

      result = result + entireString[randomNum];
      console.log(randomNum);
      setCoupon(result);
    }
  };

  return (
    <div className="admin-wrapper">
      <Sidebar />
      <main className="app-container">
        <h1>Coupon Generator</h1>
        <section>
          <form className="coupon-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Text to include"
              value={prefix}
              maxLength={size}
              onChange={(e) => setPrefix(e.target.value)}
            />
            <input
              type="number"
              placeholder="Coupon length"
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              min={8}
              max={24}
            />

            <fieldset>
              <legend>Include</legend>

              <input
                type="checkbox"
                checked={includeNum}
                onChange={() => setIncludeNum((prev) => !prev)}
              />
              <span>Numbers</span>
              <input
                type="checkbox"
                checked={includeSym}
                onChange={() => setIncludeSym((prev) => !prev)}
              />
              <span>Symbols</span>
              <input
                type="checkbox"
                checked={includeChar}
                onChange={() => setIncludeChar((prev) => !prev)}
              />
              <span>Character</span>
            </fieldset>
            <button type="submit">Generate</button>
          </form>
          {coupon && (
            <code>
              {coupon}{" "}
              <span onClick={() => textCopy(coupon)}>
                {isCopy ? "Copied" : "Copy"}
              </span>{" "}
            </code>
          )}
        </section>
      </main>
    </div>
  );
};

export default Coupon;
