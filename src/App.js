import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  console.log(products);

  const handleClick = (e) => {
    setPage(e.target.value);
  };

  const fetchData = () => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      {products.slice(page * 10 - 10, page * 10).map((li) => (
        <span key={li.id}>
          <p>{li.title}</p>
          <img src={li.thumbnail} alt="mame" />
        </span>
      ))}
      <div>
        {[...Array(products.length / 10)].map((li, index) => (
          <button key={index} value={index + 1} onClick={(e) => handleClick(e)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
