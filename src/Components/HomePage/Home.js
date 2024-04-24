import dataSpecialOffers from './SpecialFood';
import dataCategory from './Category';
import ItemLine from '../../Props/DataHome/dataItemLineWhyChooseGrapFoodHome';
import FHeader from '../Header';

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
    <div className="flex flex-col self-start">
      {/* <FHeader /> */}
      {/* <div className="-mt-20 h-fit w-full bg-white"> */}
      <div className="sticky top-1 z-50 mb-6 h-5 w-full bg-stone-500"></div>
      <div className="h-fit w-full bg-slate-500">
        <img
          src={`${arrBackground[randomBackground]}`}
          alt=""
          className="hidden h-96 w-full select-none object-cover sm:block"
        />
        {/* <div className="my-10 w-full border bg-green-300"></div> */}
        <div className="ttl-style-box-1200 flex-col px-1">
          <div className="ttl-style-title-of-box flex">
            <div className="h-full w-[35%]">Ưu đãi GrabFood tại</div>
            <div class="line-clamp-1 w-[100%-35%] text-green-600">
              780 Sư Vạn Hạnh, P.12, Q.10, Hồ Chí Minh, 70000, Vietnam
            </div>
          </div>

          <div className="h-fit w-full">
            {dataSpecialOffers()}
            <div className="my-8 mt-12 h-12 w-full rounded-md border py-3 text-center font-bold text-gray-500 hover:border-green-500 hover:text-green-500 hover:transition hover:duration-500 hover:ease-in">
              See all promotions
            </div>
          </div>
        </div>

        <div className="ttl-style-box-1200 mt-14 flex-col pl-1">
          <p className="ttl-style-title-of-box">There's something for everyone!</p>
          {dataCategory()}
        </div>

        <div className="ttl-style-box-1200 mt-20 flex-col px-1">
          <p className="ttl-style-title-of-box">Vì sao bạn nên Order trên GrabFood?</p>

          <ul className="list-image-[url(https://food.grab.com/static/images/tick.svg)] pl-5 text-lg">
            {ItemLine.map((item) => (
              <FItemLine key={item.id} topic={item.topic} info={item.info}></FItemLine>
            ))}
          </ul>

          <p className="ttl-style-title-of-box mt-12">Những câu hỏi thường gặp</p>

          <p className="ttl-style-title-of-box mb-0 text-2xl">GrabFood là gì?</p>
          <p className="text-lg leading-7">
            Lunch, Bún Cá Chấm Gốc Đa - Vũ Thạnh for Dinner! We are here to satisfy your hunger with a wide selection of
            merchant partners in Vietnam. GrabFood là dịch vụ Giao đồ ăn nhanh nhất tại Việt Nam. Chúng tôi đã sắp xếp
            tất cả các món ăn, nhà hàng và thực phẩm yêu thích của bạn một cách hợp lý để giúp bạn tìm được đồ ăn dễ
            dàng và nhanh chóng nhất có thể. Tìm và đặt món ăn yêu thích trên khắp Việt Nam - đặt đồ ăn trực tuyến chỉ
            bằng vài thao tác, từ món Lifted Coffee & Brunch cho bữa sáng, đến Maazi Indian – Nhà Hàng Ấn Độ cho bữa
            trưa, đến Bún Cá Chấm Gốc Đa – Vũ Thạnh cho bữa tối! Hãy để chúng tôi xua tan cơn đói của bạn nhờ một loạt
            đối tác bán đồ ăn ở Việt Nam.
          </p>

          <div className="my-8 mt-12 h-12 w-full rounded-md border py-3 text-center font-bold text-gray-500 hover:border-green-500 hover:text-green-500 hover:transition hover:duration-500 hover:ease-in">
            Read More
          </div>
        </div>

        <div className="h-[530px] bg-[#f7f7f7]">
          <div className="ttl-style-box-1200 items-start px-1 pt-28">
            <div className="flex w-1/2 flex-col items-center justify-center">
              <img
                src="https://food.grab.com/static/page-home/bottom-food-options.svg"
                alt=""
                loading="lazy"
                className="h-40 w-40"
              />
              <p className="ttl-style-title-of-box mb-0 mt-8 text-center text-2xl">Curated restaurants</p>
              <p className="w-[490px] text-center text-gray-600">
                From small bites to big meals, we won't limit your appetite. Go ahead and order all you want.
              </p>
            </div>

            <div className="flex w-1/2 flex-col items-center justify-center">
              <img
                src="https://food.grab.com/static/images/ilus-cool-features-app.svg"
                alt=""
                loading="lazy"
                className="h-40 w-40"
              />
              <p className="ttl-style-title-of-box mb-0 mt-8 text-center text-2xl">
                More cool features available on the app
              </p>
              <p className="w-[490px] text-center text-gray-600">
                Download Grab app to use other payment methods and enjoy seamless communication with your driver.
              </p>
              <div className="mt-6 flex flex-row gap-7">
                <img src="https://food.grab.com/static/images/logo-appstore.svg" alt="" loading="lazy" />
                <img src="https://food.grab.com/static/images/logo-playstore.svg" alt="" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
