import dataSpecialOffers from "./SpecialFood";
import dataCategory from "./Category";
import ItemLine from "../../Props/DataHome/dataItemLineWhyChooseGrapFoodHome";

function FItemLine(props) {
  return (
    <li>
      <span className="title">{props.topic}</span>
      <span>{props.info}</span>
    </li>
  );
}

function FHome() {
  return (
    <div className="container-body-grapfood-home">
      <div className="background-grapfood-home"></div>
      <div className="border-between-backgroundHome-centenHome"></div>
      <div className="center-home-grapfood">
        <div className="special-offers-grapfoodhome">
          <div className="title-special-offers-grapfoodhome">
            <h1>
              <span>Ưu đãi GrabFood tại </span>
              <span class="text-location-special-offers">
                780 Sư Vạn Hạnh, P.12, Q.10, Hồ Chí Minh, 70000, Vietnam
              </span>
            </h1>
          </div>

          <div className="container-food-special-offers">
            {dataSpecialOffers()}
            <div className="btn-show-all-food-grapfood-home">
              See all promotions
            </div>
          </div>
        </div>

        <div className="categories-grapfoodhome">
          <div className="title-special-offers-grapfoodhome">
            <h1>There's something for everyone!</h1>
          </div>
          {dataCategory()}
        </div>

        <div className="why-choose-grapfoodhome">
          <div className="title-special-offers-grapfoodhome">
            <h1>Vì sao bạn nên Order trên GrabFood?</h1>
          </div>

          <ul>
            {ItemLine.map((item) => (
              <FItemLine
                key={item.id}
                topic={item.topic}
                info={item.info}
              ></FItemLine>
            ))}
          </ul>

          <div className="title-special-offers-grapfoodhome">
            <h1>Những câu hỏi thường gặp</h1>
          </div>

          <h3>GrabFood là gì?</h3>
          <p>
            Lunch, Bún Cá Chấm Gốc Đa - Vũ Thạnh for Dinner! We are here to
            satisfy your hunger with a wide selection of merchant partners in
            Vietnam. GrabFood là dịch vụ Giao đồ ăn nhanh nhất tại Việt Nam.
            Chúng tôi đã sắp xếp tất cả các món ăn, nhà hàng và thực phẩm yêu
            thích của bạn một cách hợp lý để giúp bạn tìm được đồ ăn dễ dàng và
            nhanh chóng nhất có thể. Tìm và đặt món ăn yêu thích trên khắp Việt
            Nam - đặt đồ ăn trực tuyến chỉ bằng vài thao tác, từ món Lifted
            Coffee & Brunch cho bữa sáng, đến Maazi Indian – Nhà Hàng Ấn Độ cho
            bữa trưa, đến Bún Cá Chấm Gốc Đa – Vũ Thạnh cho bữa tối! Hãy để
            chúng tôi xua tan cơn đói của bạn nhờ một loạt đối tác bán đồ ăn ở
            Việt Nam.
          </p>
          <div className="btn-show-all-food-grapfood-home">Read More</div>
        </div>

        <div className="bottom-of-center-home-grapfood">
          <div className="box">
            <div className="box-curated-restaurants">
              <img
                src="https://food.grab.com/static/page-home/bottom-food-options.svg"
                alt=""
                loading="lazy"
              />
              <h3>Curated restaurants</h3>
              <p>
                From small bites to big meals, we won't limit your appetite. Go
                ahead and order all you want.
              </p>
            </div>

            <div className="box-more-cool-features-available-on-the-app">
              <img
                src="https://food.grab.com/static/images/ilus-cool-features-app.svg"
                alt=""
                loading="lazy"
              />
              <h3>More cool features available on the app</h3>
              <p>
                Download Grab app to use other payment methods and enjoy
                seamless communication with your driver.
              </p>
              <div>
                <img
                  src="https://food.grab.com/static/images/logo-appstore.svg"
                  alt=""
                  loading="lazy"
                />
                <img
                  src="https://food.grab.com/static/images/logo-playstore.svg"
                  alt=""
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FHome;
