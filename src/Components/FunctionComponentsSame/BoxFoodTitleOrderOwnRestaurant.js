import { FCItemOrderFood } from '../DetailOwnRestaurant/ItemOrderFood';
import Food from '../../Props/DataFoodOwnRestaurant/dataItemFoodOwnRestaurant';
import TopicFood from '../../Props/DataFoodOwnRestaurant/dataTitleOfBoxFoodOwnRestaurant';

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
    <div className="">
      {new_BoxFood.map((items) => {
        return (
          <div className="pb-9">
            <p id={items.title} className="ttlS-title">
              {items.title}
            </p>
            <div className="grid w-full grid-cols-1 gap-y-6 lg:grid-cols-3-[0-384px] lg:justify-between">
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
                      opacity_food={item.state === true ? '' : 'contrast-50 cursor-not-allowed'}
                      css={item.state === true ? 'cursor-pointer' : 'cursor-not-allowed pointer-events-none'}
                      hiddenImg={item.src === '' ? 'displayNone' : ''}
                      hidden_priceOld={item.priceOld === '' ? 'invisible' : ''}
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
