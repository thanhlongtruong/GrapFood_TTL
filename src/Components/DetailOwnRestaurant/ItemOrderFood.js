import { useEffect, useState } from 'react';
import '../../App.css';
import { ClassNamePageHome } from '../../App';
import data from '../../Props/DataFoodOwnRestaurant/dataItemFoodOwnRestaurant';
// style={{ display: "block" }}

export function WindowOrder() {
  const [isLocked, toggle, toggleWindow] = useBodyScroll();
  return (
    <div className="drawer-order-food">
      <div className="container-drawer-order-food">
        <span onClick={toggleWindow}></span>
        <div className="box-content-drawer-order-food">
          <div className="header-box-content-drawer-order-food" onClick={toggleWindow}>
            &#10005;
          </div>
          <div className="content">
            <div className="info">
              <img
                src="https://food-cms.grab.com/compressed_webp/items/VNITE20231114140943367943/photo/9ea43555891b4ecca4c3860c8b1f29dc_1699970983190338287.webp"
                alt=""
              ></img>
              <h3>Combo Cơm tấm sườn, bì, ốp la + Pepsi</h3>
              <div className="price">
                <h4>58.000</h4>
                <h6>63.000</h6>
              </div>
            </div>
            <div className="selection-option-supp-food">
              <div className="header-selection-option-supp-food">
                <h4>Lựa chọn</h4>
                <h5>Pick 1</h5>
              </div>
              <div className="options">
                <input type="radio" id="radio" />
                <label htmlFor="radio">Pepsi</label>
              </div>
            </div>
            <div className="selection-option-supp-food box-note">
              <div className="header-selection-option-supp-food">
                <h4>Special instructions</h4>
                <h5>Optional</h5>
              </div>
              <input type="text" placeholder="E.g. No onions please" />
            </div>
          </div>
          <div className="footer-box-content-drawer-order-food">
            <div className="box-control-quantity">
              <button>&#8211;</button>
              <p>1</p>
              <button>+</button>
            </div>
            <div className="btn-add-product-in-page-order">
              <button type="button">Add to Basket - 58.000</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export const useBodyScroll = () => {
  const bodyStyle = document.body.style;
  const [isLocked, setLocked] = useState(false);
  const [element, setElement] = useState(null);
  const classNamePageHome = ClassNamePageHome();

  useEffect(() => {
    const drawerElement = document.querySelector('.drawer-order-food');
    setElement(drawerElement);
  }, []);

  useEffect(() => {
    bodyStyle.overflowY = isLocked ? 'hidden' : 'auto';
  }, [isLocked, bodyStyle]);

  const toggle = () => {
    setLocked(!isLocked);
    element.style.display = 'block';
    classNamePageHome.style.filter = 'brightness(70%)';
  };

  const toggleWindow = () => {
    bodyStyle.overflowY = 'auto';
    element.style.display = 'none';
    classNamePageHome.style.filter = 'brightness(100%)';
  };
  return [isLocked, toggle, toggleWindow];
};
// onClick = { toggle };
export function FCItemOrderFood(props) {
  const [isLocked, toggle, toggleWindow] = useBodyScroll();
  return (
    <div
      className={`font-ttl-edit1 flex h-[154px] w-[384px] cursor-pointer select-none flex-row justify-between rounded-lg  bg-white p-3 ${props.opacity_food}`}
    >
      <img src={props.src} alt={props.alt} className={`h-32 w-32 rounded-lg object-cover ${props.hiddenImg}`} />
      <div className="relative h-full w-[220px]">
        <p className="max-h-1/2 absolute top-0 line-clamp-2 min-h-6 w-full overflow-hidden">{props.topic}</p>
        <div className={`${props.hidden_priceOld} absolute bottom-8 flex h-8 flex-row gap-2 text-sm`}>
          <p className="flex h-5 w-fit items-center rounded-sm bg-orange-200 px-1 font-medium text-orange-500">
            {props.discount}
          </p>
          <p className="text-gray-400 line-through">{props.priceOld}</p>
        </div>
        <div className="absolute bottom-0 flex h-8 w-full flex-row justify-between text-xl font-bold">
          {props.priceNew}
          <p className="right-0 h-8 w-8 rounded-full bg-green-600 text-center text-white">&#43;</p>
        </div>
      </div>
    </div>
  );
}

/* window.onscroll = function () {
        window.scrollTo(0, 0);
      }; */
/* function disableScroll(event) {
        event.preventDefault();
      }
      aC.addEventListener("scroll", disableScroll); */

/*  window.addEventListener("scroll", function () {
    const scrollX = window.scrollX; // Lấy toạ độ x khi scroll
    const scrollY = window.scrollY; // Lấy toạ độ y khi scroll
    console.log(scrollX);
    console.log(scrollY);
  }); */
// const [isLocked, toggle] = useBodyScroll();
