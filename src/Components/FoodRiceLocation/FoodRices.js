import data from '../../Props/DataFoodRiceLocation/dataItemFoodRiceLocation';
import { FitemFood } from '../FunctionComponentsSame/ItemFood';

export function FFoodRice() {
  return (
    <div className="grid w-full grid-cols-4-[0-288px] justify-between gap-y-12">
      {data.map((item) => (
        <FitemFood
          href={item.href}
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
