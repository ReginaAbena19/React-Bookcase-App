let formatter = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
});

const Basket = (props) => {
  return (
    <div className="basket">
      <h2>Total: {formatter.format(Math.abs(props.total))}</h2>
    </div>
  );
};

export default Basket;
