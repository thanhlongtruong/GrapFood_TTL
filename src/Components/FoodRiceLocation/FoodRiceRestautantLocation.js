import dataOption from "../../Components/FoodRiceLocation/ChooseOption";
import { FFoodRice } from "../../Components/FoodRiceLocation/FoodRices";

export function FoodRiceRestaurantLocation() {
  return (
    <div className="container-food-Com-location">
      <div className="header-choose-option-food">
        <div className="box-choose-option-food">
          <div className="box-input-search">
            <div className="icon-search"></div>
            <input type="text" placeholder="Tìm món hoặc quán ăn"></input>
          </div>
          {dataOption()}
        </div>
      </div>
      <div className="body-choose-option-food">
        <div className="special-offers-grapfoodhome">
          <div className="title-special-offers-grapfoodhome">
            <h1>
              <span>Ưu đãi ở </span>
              <span class="text-location-special-offers">
                780 Sư Vạn Hạnh, P.12, Q.10, Hồ Chí Minh, 70000, Vietnam
              </span>
            </h1>
          </div>

          <div className="container-food-special-offers"><FFoodRice/></div>
        </div>
      </div>
    </div>
  );
}
