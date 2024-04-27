import { createContext, useEffect, useRef, useState } from 'react';
import data from '../Props/DataFoodOwnRestaurant/dataItemFoodOwnRestaurant';

export const OrderContext = createContext({});
export const OrderProvider = ({ children }) => {
  const containerResOwn = useRef();
  const containerWOrder = useRef();
  const [isShow, setShow] = useState(false);

  const handleShow = () => {
    setShow(!isShow);
  };

  useEffect(() => {}, [isShow]);

  return (
    <OrderContext.Provider value={{ containerResOwn, containerWOrder, isShow, setShow, handleShow }}>
      {children}
    </OrderContext.Provider>
  );
};
// const [isLocked, toggle, toggleWindow] = useBodyScroll();
// export const useBodyScroll = () => {
//   const bodyStyle = document.body.style;
//   const [isLocked, setLocked] = useState(false);
//   const [element, setElement] = useState(null);
//   const classNamePageHome = ClassNamePageHome();

//   useEffect(() => {
//     const drawerElement = document.querySelector('.drawer-order-food');
//     setElement(drawerElement);
//   }, []);

//   useEffect(() => {
//     bodyStyle.overflowY = isLocked ? 'hidden' : 'auto';
//   }, [isLocked, bodyStyle]);

//   const toggle = () => {
//     setLocked(!isLocked);
//     element.style.display = 'block';
//     classNamePageHome.style.filter = 'brightness(70%)';
//   };

//   const toggleWindow = () => {
//     bodyStyle.overflowY = 'auto';
//     element.style.display = 'none';
//     classNamePageHome.style.filter = 'brightness(100%)';
//   };
//   return [isLocked, toggle, toggleWindow];
// };
