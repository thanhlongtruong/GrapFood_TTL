import data from '../../Props/DataFoodRiceLocation/dataItemFoodRiceLocation';
import { DetailRestaurant } from '../../Components/FunctionComponentsSame/DetailRestaurant';
import { BoxOder } from '../../Components/FunctionComponentsSame/BoxFoodTitleOrderOwnRestaurant';
import FHeader from '../Header';
import FFooter from '../Footer';
import '../../index.css';
import title from '../../Props/DataFoodOwnRestaurant/dataTitleOfBoxFoodOwnRestaurant';
import { useContext, useEffect, useRef, useState } from 'react';
import { OrderContext } from '../../Context/ShowOrder';
import WindowOrder from '../DrawOrderFood/WindowOrder';

export function OwnRestaurant() {
  const boxTitle = useRef();
  const [widthNavi, setWidthNavi] = useState('0px');
  useEffect(() => {
    const box = boxTitle.current;
    const boxChild = box.children;
    const tab = boxChild[1].children;

    for (let i = 0; i < boxChild.length; i++) {
      boxChild[i].addEventListener('click', function () {
        if (i === 0) {
          boxChild[1].scrollBy({
            left: -100,
            behavior: 'smooth',
          });
        }
        if (i === 2) {
          boxChild[1].scrollBy({
            left: 100,
            behavior: 'smooth',
          });
        }
      });
    }

    const fllowWidth = () => {
      setWidthNavi(box.offsetWidth + 'px');
    };

    window.addEventListener('resize', fllowWidth);

    for (let i = 0; i < tab.length; i++) {
      tab[i].addEventListener('click', function () {
        for (let j = 0; j < tab.length; j++) {
          tab[j].classList.remove('bg-green-300', 'text-white', 'font-bold');
        }
        tab[i].classList.add('bg-green-300', 'text-white', 'font-bold');
        tab[i].classList.remove('bg-green-300', 'text-white', 'font-bold'); //! :))
      });
    }
  }, []);
  const { containerResOwn, isShow, setShow } = useContext(OrderContext);
  useEffect(() => {
    isShow ? (document.body.style.overflowY = 'hidden') : (document.body.style.overflowY = 'auto');
  }, [isShow]);
  return (
    <div>
      <div className={`containerResOwn scroll-smooth`} ref={containerResOwn}>
        <FHeader />
        <div className="ttlS-repon">
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

          <div className="ttlS-flex sticky h-fit w-full border-purple-900 bg-white p-3" ref={boxTitle}>
            <div className="ttlS-arrowBg left-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-6 w-6"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </div>

            <div className={`w-[${widthNavi}] mx-7 h-fit overflow-hidden  whitespace-nowrap`}>
              {title.map((item) => {
                return (
                  <a
                    href={`#${item.title}`}
                    className="mr-2 inline-block rounded-3xl border p-1 px-3 hover:bg-green-300"
                  >
                    {item.title}
                  </a>
                );
              })}
            </div>

            <div className="ttlS-arrowBg right-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-6 w-6"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </div>
          </div>

          <BoxOder />
        </div>
        <FFooter />
      </div>
      {isShow && <WindowOrder />}
    </div>
  );
}
