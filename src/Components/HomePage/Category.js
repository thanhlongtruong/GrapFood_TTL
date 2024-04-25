import { Link } from 'react-router-dom';
import ItemsCatagory from '../../Props/DataHome/dataItemCategorysGrapFoodHome';
function ItemCategory(props) {
  return (
    <Link to={props.href} className="h-fit w-fit select-none">
      <img src={props.src} alt={props.alt} loading="lazy" className="ttlS-rounded-md" />
      <p className="text-lg font-semibold text-black">{props.title}</p>
    </Link>
  );
}
function Category() {
  return (
    <div className="grid w-full grid-cols-2 justify-between gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4-[0-288px]">
      {ItemsCatagory.map((item) => (
        <ItemCategory key={item.id} src={item.src} alt={item.alt} title={item.title} href={item.href}></ItemCategory>
      ))}
    </div>
  );
}
export default Category;
