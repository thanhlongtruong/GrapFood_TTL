export const TitleLocationShipFood = (props) => {
  return (
    <div className="ttlS-title">
      <p className="h-full whitespace-nowrap">{props.topic} &nbsp;</p>
      <p class="line-clamp-1 w-fit text-green-600">{props.location}</p>
    </div>
  );
};
