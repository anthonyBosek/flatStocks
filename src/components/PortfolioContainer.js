import Stock from "./Stock";

const PortfolioContainer = ({ portfolio, handleSell }) => {
  const stocks = portfolio.map((stock) => (
    <Stock key={stock.id} stock={stock} handleClick={handleSell} />
  ));

  return (
    <div>
      <h2>My Portfolio</h2>
      {stocks}
    </div>
  );
};

export default PortfolioContainer;
