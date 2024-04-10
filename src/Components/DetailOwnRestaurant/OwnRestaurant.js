import data from "../../Props/DataFoodRiceLocation/dataItemFoodRiceLocation";
import { DetailRestaurant } from "../../Components/FunctionComponentsSame/DetailRestaurant";
import { BoxOder } from "../../Components/FunctionComponentsSame/BoxFoodTitleOrderOwnRestaurant";

export function OwnRestaurant() {
  return (
    <div className="container-detail-restaurant-foodRice">
      <div className="detail-restaurant-foodRice">
        <div className="info-detail-restaurant-header">
          <div className="list-food-special-offers">
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
          </div>
        </div>
        <BoxOder />
      </div>
    </div>
  );
}
