import dataItem from "../../Props/DataFoodRiceLocation/dataItemOptionsRestautantLocation";
function FOption(props) {
  return (
    <div className="item-options-restaurant-location">
      <img src={props.src} alt={props.alt} loading="lazy" />
      <p>{props.title}</p>
    </div>
  );
}
function item() {
  return (
    <div className="options">
      {dataItem.map((item) => (
        <FOption
          key={item.id}
          src={item.src}
          alt={item.title}
          title={item.title}
        ></FOption>
      ))}
    </div>
  );
}
export default item;
