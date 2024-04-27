import { useContext } from 'react';
import '../../App.css';
import { OrderContext } from '../../Context/ShowOrder';

export function WindowOrder() {
  return (
    <div className="drawer-order-food">
      <div className="container-drawer-order-food">
        <span></span>
        <div className="box-content-drawer-order-food">
          <div className="header-box-content-drawer-order-food">&#10005;</div>
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

export function FCItemOrderFood(props) {
  const { handleShow } = useContext(OrderContext);

  return (
    <div
      className={`flex h-[154px] ${props.css} select-none flex-col gap-6 lg:rounded-lg lg:border lg:bg-white lg:p-3`}
      onClick={handleShow}
    >
      <div className={`grid h-full grid-cols-[96px_auto] gap-5 sm:grid-cols-[128px_auto] ${props.opacity_food}`}>
        <img
          src={props.src}
          alt={props.alt}
          className={`h-24 w-24 rounded-lg object-cover sm:h-32 sm:w-32 ${props.hiddenImg}`}
        />
        <div className="relative h-full w-full">
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
      <div className="col-span-2 border-b-2 border-gray-300 lg:hidden"></div>
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
