import { useContext, useEffect } from 'react';
import { OrderContext } from '../../Context/ShowOrder';

function WindowOrder() {
  const { containerWOrder, handleShow } = useContext(OrderContext);

  return (
    <div className="containerWOrder fixed top-0 z-50 h-full w-full" ref={containerWOrder}>
      <div className="ttlS-flex h-full w-full">
        <span
          className="h-full w-0 bg-white/10 backdrop-brightness-50  md:w-[20%] lg:w-[60%]"
          onClick={handleShow}
        ></span>
        <div className="md:[w-80%] h-full w-full bg-white lg:w-[40%]">
          <div className="ttlS-flex sticky top-0 h-[10%] cursor-pointer border-b-2 px-4" onClick={handleShow}>
            &#10005;
          </div>
          <div className="h-[80%] overflow-auto p-4">
            <div className="ttlS-flex items-start justify-start gap-4">
              <img
                src="https://food-cms.grab.com/compressed_webp/items/VNITE20231114140943367943/photo/9ea43555891b4ecca4c3860c8b1f29dc_1699970983190338287.webp"
                alt=""
                className="ttlS-rounded-md h-24 w-24 object-cover sm:h-28 sm:w-28"
              />
              <p className="line-clamp-2 text-xl font-bold">Combo Cơm tấm sườn, bì, ốp la + Pepsi</p>
              <div className="price">
                <h4 className="text-xl font-bold">58.000</h4>
                <h6 className="text-sm line-through">63.000</h6>
              </div>
            </div>
            <div>
              <div className="ttlS-flex mb-3 flex justify-normal gap-4">
                <h4 className="text-lg font-bold">Lựa chọn</h4>
                <h5 className="text-sm">Pick 1</h5>
              </div>
              <div className="ttlS-flex justify-normal">
                <input type="radio" id="radio" className="mr-3 h-5 w-5" />
                <label for="radio">Pepsi</label>
              </div>
            </div>
            <div className="ttlS-ruler my-3 mt-10 border-2"></div>
            <div>
              <div className="ttlS-flex mb-3 flex justify-normal gap-4">
                <h4 className="text-lg font-bold">Special instructions</h4>
                <h5 className="text-sm">Optional</h5>
              </div>
              <input type="text" placeholder="E.g. No onions please" className="ttlS-btnMore my-0 mt-0 font-normal" />
            </div>
          </div>
          <div className="ttlS-flex sticky bottom-0 z-10 mx-4 h-fit w-full flex-col justify-center gap-5 sm:flex-row md:h-[10%]">
            <div className="ttlS-flex justify-center gap-5">
              <p className="ttlS-header ttlS-flex h-10 w-10 justify-center p-0">&#8211;</p>
              <p className="ttlS-header ttlS-flex h-10 w-10 justify-center p-0">1</p>
              <p className="ttlS-header ttlS-flex h-10 w-10 justify-center p-0">+</p>
            </div>
            <div className="ttlS-flex ttlS-header h-10 w-fit justify-center bg-gray-400 p-0 px-4 text-white">
              <p>Add to Basket - 58.000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WindowOrder;
//   if (typeof isState === "undefined") {
//     isExecuted = false;
//   } else {
//     return (
//       <>
//         {isExecuted && (
//           <div
//             className={`drawer-order-food `}
//             //className="drawer-order-food showDrawer"
//           >
//             <div className="container-drawer-order-food">
//               <span></span>
//               <div className="box-content-drawer-order-food">
//                 <div className="header-box-content-drawer-order-food">
//                   &#10005;
//                 </div>
//                 <div className="content">
//                   <div className="info">
//                     <img
//                       src="https://food-cms.grab.com/compressed_webp/items/VNITE20231114140943367943/photo/9ea43555891b4ecca4c3860c8b1f29dc_1699970983190338287.webp"
//                       alt=""
//                     ></img>
//                     <h3>Combo Cơm tấm sườn, bì, ốp la + Pepsi</h3>
//                     <div className="price">
//                       <h4>58.000</h4>
//                       <h6>63.000</h6>
//                     </div>
//                   </div>
//                   <div className="selection-option-supp-food">
//                     <div className="header-selection-option-supp-food">
//                       <h4>Lựa chọn</h4>
//                       <h5>Pick 1</h5>
//                     </div>
//                     <div className="options">
//                       <input type="radio" id="radio" />
//                       <label for="radio">Pepsi</label>
//                     </div>
//                   </div>
//                   <div className="selection-option-supp-food box-note">
//                     <div className="header-selection-option-supp-food">
//                       <h4>Special instructions</h4>
//                       <h5>Optional</h5>
//                     </div>
//                     <input type="text" placeholder="E.g. No onions please" />
//                   </div>
//                 </div>
//                 <div className="footer-box-content-drawer-order-food">
//                   <div className="box-control-quantity">
//                     <button>&#8211;</button>
//                     <p>1</p>
//                     <button>+</button>
//                   </div>
//                   <div className="btn-add-product-in-page-order">
//                     <button type="button">Add to Basket - 58.000</button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </>
//     );
//   }
