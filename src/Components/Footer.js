import '../index.css';
import ItemAboutFooter from '../Props/DataFooter/dataItemAboutGrapFoodFooter';
import image_fb from '../images/facebook.png';
import image_instar from '../images/instagram.png';
import image_twitter from '../images/twitter.png';

function FItemAboutFooter(props) {
  return <div className={`w-1/4 font-medium text-white ${props.className}`}>{props.children}</div>;
}
const items = [
  {
    id: 0,
    ids: 0,
    title: 'Về GrabFood',
  },
  {
    id: 1,
    ids: 0,
    title: 'Về Grab',
  },
  {
    id: 2,
    ids: 0,
    title: 'Blog',
  },
  {
    id: 3,
    ids: 1,
    title: 'Mở quán trên GrabFood',
  },
  {
    id: 4,
    ids: 1,
    title: 'Trở thành tài xế Grab',
  },
  {
    id: 5,
    ids: 2,
    title: 'Trung tâm hỗ trợ',
  },
  {
    id: 6,
    ids: 2,
    title: 'Câu hỏi thường gặp',
  },
  {
    id: 7,
    ids: 3,
    src: image_fb,
    alt: 'facebook',
  },
  {
    id: 8,
    ids: 3,
    src: image_instar,
    alt: 'instargram',
  },
  {
    id: 9,
    ids: 3,
    src: image_twitter,
    alt: 'twitter',
  },
];
function FISomeOfItemsFooter(props) {
  return (
    <div className="text-lg leading-10">
      {props.title}
      <img alt={props.alt} src={props.src} loading="lazy" />
    </div>
  );
}
function FFooter() {
  return (
    <footer className="h-[458px] w-full bg-green-500">
      <div className="ttl-style-box-1200 flex-col items-start pt-7">
        <img
          src="https://food.grab.com/static/images/logo-grabfood-white2.svg"
          alt="Logo-GrapFood-ThanhLong xin tài trợ"
          loading="lazy"
          className="h-16 w-48"
        />
        <div className="my-10 w-full border bg-green-300"></div>
        <div className="ttl-style-box-1200 items-start">
          {ItemAboutFooter.map((item) => {
            return (
              <FItemAboutFooter key={item.id} className={item.id === 3 ? 'flex gap-5' : ''}>
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
                  return null;
                })}
              </FItemAboutFooter>
            );
          })}
        </div>
        <div className="my-10 w-full border bg-green-300"></div>
        <div className="flex w-full flex-row items-center justify-between">
          <div className="flex flex-row gap-5">
            <img src="https://food.grab.com/static/images/logo-appstore.svg" alt="" loading="lazy" />
            <img src="https://food.grab.com/static/images/logo-playstore.svg" alt="" loading="lazy" />
          </div>
          <div className="text-white">
            <span>© 2024 Grab</span>
            <span className="mx-5">Câu hỏi thường gặp</span>
            <span>Chính sách bảo mật</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default FFooter;
