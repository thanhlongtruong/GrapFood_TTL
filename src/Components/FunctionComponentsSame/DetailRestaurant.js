export function DetailRestaurant(props) {
  return (
    <div className="box-detail-own-restaurant">
      <h1 className="name-own-restaurant">{props.nameRestaurant}</h1>
      <h3 className="name-food">{props.nameFood}</h3>
      <div className="box-info">
        <div className="rating-food">
          <div className="icon-rating"></div>
          {props.rating}
        </div>
        <div className="paragraph-info">
          <div className="icon-info-minutes"></div>
          {props.time} &nbsp;&nbsp;•&nbsp;&nbsp; {props.distance}
        </div>
      </div>
      <div className="time-open-own-restaurant">
        <h3>Giờ mở cửa</h3>
        <span>{props.timeOpen}</span>
      </div>
      <div className="special-offers">
        <div className="icon"></div>
        <div className="text">{props.special}</div>
      </div>
      <div className="box-date-time-order-food-own-restaurant">
        <div className="delivery-date">
          <div className="icon"></div>
          <div className="topic">Ngày giao hàng: </div>
          <div className="content"> &nbsp;Hôm nay</div>
        </div>
        <div className="delivery-hours">
          <div className="icon"></div>
          <div className="topic">Thời gian giao hàng: </div>
          <div className="content"> &nbsp;Ngay bây giờ</div>
        </div>
      </div>
    </div>
  );
}
