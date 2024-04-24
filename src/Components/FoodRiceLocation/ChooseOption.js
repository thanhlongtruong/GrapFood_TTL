import dataItem from '../../Props/DataFoodRiceLocation/dataItemOptionsRestautantLocation';
function FOption(props) {
  return (
    <div className="hover: relative h-[112px] w-[179px]">
      <img src={props.src} alt={props.alt} loading="lazy" className=" h-full w-full rounded-md  brightness-50" />
      <p className="absolute top-0 flex h-full w-full items-center justify-center text-sm font-semibold text-gray-50">
        {props.title}
      </p>
    </div>
  );
}
function item() {
  return (
    <div className="ttl-style-box-1200 h-[112px] w-full">
      {dataItem.map((item) => (
        <FOption key={item.id} src={item.src} alt={item.title} title={item.title}></FOption>
      ))}
    </div>
  );
}
export default item;
