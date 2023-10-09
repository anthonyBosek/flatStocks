import { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

const MainContainer = () => {
  const [allStocks, setAllStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [sortTxt, setSortTxt] = useState("");
  const [filterTxt, setFilterTxt] = useState("");

  useEffect(() => {
    const getData = () => {
      fetch("http://localhost:3001/stocks")
        .then((resp) => resp.json())
        .then((data) => setAllStocks(data))
        .catch((err) => console.log(err));
    };
    getData();
  }, []);

  const handleBuy = (stock) => setPortfolio((prev) => [...prev, stock]);

  const handleSell = (stock) =>
    setPortfolio((prev) => prev.filter((obj) => obj.id !== stock.id));

  const handleSort = (e) => setSortTxt(e.target.value);

  const handleFilter = (e) => setFilterTxt(e.target.value);

  return (
    <div>
      <SearchBar
        sortTxt={sortTxt}
        filterTxt={filterTxt}
        handleSort={handleSort}
        handleFilter={handleFilter}
      />
      <div className="row">
        <div className="col-8">
          <StockContainer
            sortTxt={sortTxt}
            filterTxt={filterTxt}
            allStocks={allStocks}
            handleBuy={handleBuy}
          />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} handleSell={handleSell} />
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
