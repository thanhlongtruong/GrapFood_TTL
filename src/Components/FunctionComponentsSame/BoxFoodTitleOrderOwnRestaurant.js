import { FCItemOrderFood } from "../DetailOwnRestaurant/ItemOrderFood";
import Food from "../../Props/DataFoodOwnRestaurant/dataItemFoodOwnRestaurant";
import TopicFood from "../../Props/DataFoodOwnRestaurant/dataTitleOfBoxFoodOwnRestaurant";

const BoxFood = [];
const Foods = Food.filter((data) => {
  return TopicFood.filter((data2) => {
    if (data.ids === data2.id) {
      BoxFood.push(data2);
    }
  });
});

const new_BoxFood = [...new Set(BoxFood)];

export function BoxOder() {
  return (
    <div className="body-detail-restaurant-foodRice">
      {new_BoxFood.map((items) => {
        return (
          <div className="box-body">
            <div className="title-special-offers-grapfoodhome">
              <h1>{items.title}</h1>
            </div>
            <div className="content-body-detail-restaurant-foodRice">
              {Foods.map((item) => {
                if (item.ids === items.id) {
                  return (
                    <FCItemOrderFood
                      key={item.id}
                      href={item.href}
                      src={item.src}
                      alt={item.topic}
                      topic={item.topic}
                      discount={item.discount}
                      priceOld={item.priceOld}
                      priceNew={item.priceNew}
                      className={item.state === true ? "" : "opacity"}
                      hiddenImg={item.src === "" ? "displayNone" : ""}
                    />
                  );
                }
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
