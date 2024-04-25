import dataItem from '../../Props/DataFoodRiceLocation/dataItemOptionsRestautantLocation';
function FOption(props) {
  return (
    <div className="relative">
      <img src={props.src} alt={props.alt} loading="lazy" className=" h-full w-full rounded-md  brightness-50" />
      <p className="ttlS-flex absolute top-0 h-full w-full justify-center text-sm font-semibold text-gray-50">
        {props.title}
      </p>
    </div>
  );
}
function item() {
  return (
    <div className="grid h-fit w-full grid-cols-2 justify-between gap-3 sm:grid-cols-3-[0-384px] lg:grid-cols-6-[0-179px]">
      {dataItem.map((item) => (
        <FOption key={item.id} src={item.src} alt={item.title} title={item.title}></FOption>
      ))}
    </div>
  );
}
export default item;
