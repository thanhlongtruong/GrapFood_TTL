import ItemsCatagory from '../../Props/DataHome/dataItemCategorysGrapFoodHome';
function ItemCategory(props) {
  return (
    <a href={props.href} className="h-fit w-fit select-none">
      <img src={props.src} alt={props.alt} loading="lazy" className="ttl-style-rounded-md-img-food" />
      <p className="text-lg font-semibold text-black">{props.title}</p>
    </a>
  );
}
function dataCategory() {
  return (
    <div className="grid-cols-4-[0-288px] grid w-full justify-between gap-y-12">
      {ItemsCatagory.map((item) => (
        <ItemCategory key={item.id} src={item.src} alt={item.alt} title={item.title} href={item.href}></ItemCategory>
      ))}
    </div>
  );
}
export default dataCategory;
