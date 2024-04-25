import data from '../../Props/DataHome/dataItemFoodSpecialOffer';
import { FitemFood } from '../FunctionComponentsSame/ItemFood';

function dataSpecialOffers() {
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4">
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
          href={item.href}
        />
      ))}
      <div className="ttlS-btnMore col-span-full grid">See all promotions</div>
    </div>
  );
}
export default dataSpecialOffers;
