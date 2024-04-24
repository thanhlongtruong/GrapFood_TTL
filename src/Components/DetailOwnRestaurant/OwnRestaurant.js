import data from '../../Props/DataFoodRiceLocation/dataItemFoodRiceLocation';
import { DetailRestaurant } from '../../Components/FunctionComponentsSame/DetailRestaurant';
import { BoxOder } from '../../Components/FunctionComponentsSame/BoxFoodTitleOrderOwnRestaurant';

export function OwnRestaurant() {
  return (
    <div className="h-fit w-full border border-red-700">
      {data.map((item) => {
        if (item.id === 0) {
          return (
            <DetailRestaurant
              key={item.id}
              nameRestaurant={item.title}
              nameFood={item.moreInfo}
              rating={item.rating}
              time={item.time}
              distance={item.distance}
              timeOpen={item.timeOpen}
              special={item.special}
            />
          );
        }
      })}
      <div className="sticky top-20 z-10 h-20 w-full border border-purple-900 bg-white">
        <a href="#Món cơm">Ưu đãi hôm nay</a>
      </div>

      <div id="Món cơm" className="h-fit w-full bg-[#f7f7f7]">
        <BoxOder />
      </div>
    </div>
  );
}
