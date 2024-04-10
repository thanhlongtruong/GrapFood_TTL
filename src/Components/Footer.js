import ItemAboutFooter from "../Props/DataFooter/dataItemAboutGrapFoodFooter";
import image_fb from "../images/facebook.png";
import image_instar from "../images/instagram.png";
import image_twitter from "../images/twitter.png";

function FItemAboutFooter(props) {
  return <div className={`item ${props.className}`}>{props.children}</div>;
}
const items = [
  {
    id: 0,
    ids: 0,
    title: "Về GrabFood",
  },
  {
    id: 1,
    ids: 0,
    title: "Về Grab",
  },
  {
    id: 2,
    ids: 0,
    title: "Blog",
  },
  {
    id: 3,
    ids: 1,
    title: "Mở quán trên GrabFood",
  },
  {
    id: 4,
    ids: 1,
    title: "Trở thành tài xế Grab",
  },
  {
    id: 5,
    ids: 2,
    title: "Trung tâm hỗ trợ",
  },
  {
    id: 6,
    ids: 2,
    title: "Câu hỏi thường gặp",
  },
  {
    id: 7,
    ids: 3,
    src: image_fb,
    alt: "facebook",
  },
  {
    id: 8,
    ids: 3,
    src: image_instar,
    alt: "instargram",
  },
  {
    id: 9,
    ids: 3,
    src: image_twitter,
    alt: "twitter",
  },
];
function FISomeOfItemsFooter(props) {
  return (
    <div className="aaaaa">
      {props.title}
      <img alt={props.alt} src={props.src} loading="lazy" />
    </div>
  );
}
function FFooter() {
  return (
    <footer className="box-footerHome">
      <div className="box">
        <img
          src="https://food.grab.com/static/images/logo-grabfood-white2.svg"
          alt=""
          loading="lazy"
        />
        <div className="border"></div>
        <div className="link-about-info-grapfoodhome-footer">
          {ItemAboutFooter.map((item) => {
            return (
              <FItemAboutFooter
                key={item.id}
                className={item.id === 3 ? "box-img" : ""}
              >
                {items.map((itemss) => {
                  if (item.id === itemss.ids) {
                    return (
                      <FISomeOfItemsFooter
                        key={itemss.id}
                        title={itemss.title}
                        src={itemss.src}
                        alt={itemss.alt}
                      ></FISomeOfItemsFooter>
                    );
                  }
                })}
              </FItemAboutFooter>
            );
          })}
        </div>
        <div className="border"></div>
        <div className="dowload-app-and-about-footer">
          <div className="dowload-app">
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
          <div className="about-footer">
            <p>© 2024 Grab</p>
            <p>Câu hỏi thường gặp</p>
            <p>Chính sách bảo mật</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default FFooter;
