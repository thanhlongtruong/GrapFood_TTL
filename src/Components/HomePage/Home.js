import dataSpecialOffers from './SpecialFood';
import Category from './Category';
import ItemLine from '../../Props/DataHome/dataItemLineWhyChooseGrapFoodHome';
import FHeader from '../Header';
import FFooter from '../Footer';
import { TitleLocationShipFood } from '../FunctionComponentsSame/TitleLocationShipFood';
function FItemLine(props) {
  return (
    <li className="mb-4">
      <span className="font-bold">{props.topic}</span>
      <span>{props.info}</span>
    </li>
  );
}
// eslint-disable-next-line no-unused-vars
const arrBackground = [
  'https://food.grab.com/static/page-home/VN-new-1.jpg',
  'https://food.grab.com/static/page-home/VN-new-2.jpg',
  'https://food.grab.com/static/page-home/VN-new-3.jpg',
  'https://food.grab.com/static/page-home/VN-new-4.jpg',
];

export function FHome() {
  let randomBackground = Math.floor(Math.random() * arrBackground.length);
  return (
    <div className="h-fit w-full">
      <FHeader />

      <div className="ttlS-hideShow w-full sm:-mt-20">
        <img src={`${arrBackground[randomBackground]}`} alt="" className="h-96 w-full select-none object-cover" />
        <div className="ttlS-ruler"></div>
      </div>

      <div className="ttlS-repon">
        <div className="">
          <TitleLocationShipFood
            topic="Ưu đãi GrabFood tại"
            location="780 Sư Vạn Hạnh, P.12, Q.10, Hồ Chí Minh, 70000, Vietnam"
          />

          {dataSpecialOffers()}
        </div>

        <div className="mt-14">
          <p className="ttlS-title">There's something for everyone!</p>
          {Category()}
        </div>

        <div className=" mt-20 flex-col px-1">
          <p className="ttlS-title text-4xl">Vì sao bạn nên Order trên GrabFood?</p>

          <ul className="list-image-[url(https://food.grab.com/static/images/tick.svg)] pl-5 text-lg">
            {ItemLine.map((item) => (
              <FItemLine key={item.id} topic={item.topic} info={item.info}></FItemLine>
            ))}
          </ul>

          <p className="ttlS-title mt-12 text-4xl">Những câu hỏi thường gặp</p>

          <p className="ttlS-title mb-0 text-2xl">GrabFood là gì?</p>
          <p className="text-lg leading-7">
            Lunch, Bún Cá Chấm Gốc Đa - Vũ Thạnh for Dinner! We are here to satisfy your hunger with a wide selection of
            merchant partners in Vietnam. GrabFood là dịch vụ Giao đồ ăn nhanh nhất tại Việt Nam. Chúng tôi đã sắp xếp
            tất cả các món ăn, nhà hàng và thực phẩm yêu thích của bạn một cách hợp lý để giúp bạn tìm được đồ ăn dễ
            dàng và nhanh chóng nhất có thể. Tìm và đặt món ăn yêu thích trên khắp Việt Nam - đặt đồ ăn trực tuyến chỉ
            bằng vài thao tác, từ món Lifted Coffee & Brunch cho bữa sáng, đến Maazi Indian – Nhà Hàng Ấn Độ cho bữa
            trưa, đến Bún Cá Chấm Gốc Đa – Vũ Thạnh cho bữa tối! Hãy để chúng tôi xua tan cơn đói của bạn nhờ một loạt
            đối tác bán đồ ăn ở Việt Nam.
          </p>

          <div className="ttlS-btnMore">Read More</div>
        </div>
      </div>
      <div className="grid h-fit w-full grid-cols-1 gap-y-10 bg-[#f7f7f7] p-4 sm:grid-cols-2 sm:gap-x-9">
        <div className="flex flex-col items-center justify-start">
          <img
            src="https://food.grab.com/static/page-home/bottom-food-options.svg"
            alt=""
            loading="lazy"
            className="h-40 w-40"
          />
          <p className="mb-0 mt-6 text-center text-2xl">Curated restaurants</p>
          <p className="text-center text-gray-600">
            From small bites to big meals, we won't limit your appetite. Go ahead and order all you want.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <img
            src="https://food.grab.com/static/images/ilus-cool-features-app.svg"
            alt=""
            loading="lazy"
            className="h-40 w-40"
          />
          <p className="mb-0 mt-6 text-center text-2xl">More cool features available on the app</p>
          <p className="text-center text-gray-600">
            Download Grab app to use other payment methods and enjoy seamless communication with your driver.
          </p>
          <div className="mt-6 flex h-auto w-full flex-row flex-wrap  justify-center gap-7 lg:flex-nowrap">
            <img src="https://food.grab.com/static/images/logo-appstore.svg" alt="" loading="lazy" />
            <img src="https://food.grab.com/static/images/logo-playstore.svg" alt="" loading="lazy" />
          </div>
        </div>
      </div>
      <FFooter />
    </div>
  );
}
