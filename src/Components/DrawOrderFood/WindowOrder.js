function WindowOrder(isState) {
  return (
    <div className="drawer-order-food" style={{ display: 'block' }}>
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
                <label for="radio">Pepsi</label>
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
