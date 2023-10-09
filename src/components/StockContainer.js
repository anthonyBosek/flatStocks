import Stock from "./Stock";

const StockContainer = ({ sortTxt, filterTxt, allStocks, handleBuy }) => {
  const filtered = allStocks.filter(
    (stock) =>
      filterTxt === "" || stock.type.toLowerCase() === filterTxt.toLowerCase()
  );

  const sorted = sortTxt
    ? filtered.sort((a, b) => {
        if (sortTxt === "Price") {
          return a.price - b.price;
        } else {
          if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return -1;
          }
          if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return 1;
          }
          return 0;
        }
      })
    : filtered;

  const stocks = sorted.map((stock) => (
    <Stock key={stock.id} stock={stock} handleClick={handleBuy} />
  ));

  return (
    <div>
      <h2>Stocks</h2>
      {stocks}
    </div>
  );
};

export default StockContainer;
