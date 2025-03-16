import Sidebar from "../../components/Sidebar";
import { useState, ChangeEvent, FormEvent } from "react";

const img =
  "https://inventstore.in/wp-content/uploads/2024/03/MacBook_Air_13_in_M3_Midnight_PDP_Image_Position_1__en-IN-scaled.webp";

const ManageProduct = () => {
  const [name, setName] = useState<string>("Macbook Air");
  const [price, setPrice] = useState<number>(69420);
  const [stock, setStock] = useState<number>(69);
  const [photo, setPhoto] = useState<string>(img);

  const [nameUpdate, setNameUpdate] = useState<string>(name);
  const [priceUpdate, setPriceUpdate] = useState<number>(price);
  const [stockUpdate, setStockUpdate] = useState<number>(stock);
  const [photoUpdate, setPhotoUpdate] = useState<string>(photo);

  const handleImagechange = (e: ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = e.target.files?.[0];

    const reader: FileReader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (typeof reader.result === "string") setPhoto(reader.result);
      };
    }
  };

  const handleUpdateSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPriceUpdate(price);
    setStockUpdate(stock);
    setPhotoUpdate(photo);
    setNameUpdate(name);
  };

  return (
    <div className="admin-wrapper">
      <Sidebar />

      <main className="product-management">
        <section>
          <strong>ID-asdhetawdfh</strong>

          <img src={photoUpdate} alt="Product_IMG" />
          <p>{nameUpdate}</p>
          {stock > 0 ? (
            <span className="green">{stockUpdate} Available</span>
          ) : (
            <span className="red"> Not Available</span>
          )}
          <h3>₹{priceUpdate}</h3>
        </section>
        <article>
          <form onSubmit={(e) => handleUpdateSubmit(e)}>
            <h2>MANAGE</h2>
            <div>
              <label>Name</label>
              <input
                required
                type="text"
                placeholder="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label>Price</label>
              <input
                required
                type="number"
                placeholder="price"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
              />
            </div>
            <div>
              <label>Stock</label>
              <input
                required
                type="number"
                placeholder="stock"
                value={stock}
                onChange={(e) => setStock(Number(e.target.value))}
              />
            </div>
            <div>
              <label>Photo</label>
              <input
                required
                type="file"
                onChange={(e) => handleImagechange(e)}
              />
            </div>
            {photo && <img src={photo} alt="New Photo" />}
            <button type="submit">Update</button>
          </form>
        </article>
      </main>
    </div>
  );
};

export default ManageProduct;
