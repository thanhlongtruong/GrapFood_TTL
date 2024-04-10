import ItemsCatagory from "../../Props/DataHome/dataItemCategorysGrapFoodHome";
function ItemCategory(props) {
  return (
    <div className="box-item-category">
      <a href={props.href} role="button">
        <div className="item-food-special-offers">
          <img src={props.src} alt={props.alt} loading="lazy" />
          <div className="info-item-food-special-offers">
            <p>{props.title}</p>
          </div>
        </div>
      </a>
    </div>
  );
}
function dataCategory() {
  return (
    <div className="container-categories">
      {ItemsCatagory.map((item) => (
        <ItemCategory
          key={item.id}
          src={item.src}
          alt={item.alt}
          title={item.title}
          href={item.href}
        ></ItemCategory>
      ))}
    </div>
  );
}
export default dataCategory;
