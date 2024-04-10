import data from "../../Props/DataHome/dataItemFoodSpecialOffer";
import { FitemFood } from "../FunctionComponentsSame/ItemFood";

function dataSpecialOffers() {
  return (
    <div className="list-food-special-offers">
      {data.map((item) => (
        <FitemFood
          key={item.id}
          src={item.src}
          alt={item.title}
          title={item.title}
          moreInfo={item.moreInfo}
          rating={item.rating}
          time={item.time}
          distance={item.distance}
          special={item.special}
          warn={item.warn}
        />
      ))}
    </div>
  );
}
export default dataSpecialOffers;
