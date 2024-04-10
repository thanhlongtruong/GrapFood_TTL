export function FitemFood(props) {
  return (
    <div className="box-itemFood">
      <a href={props.href} role="button">
        <div className="item-food-special-offers">
          <img src={props.src} alt={props.alt} loading="lazy" />

          <div className="info-item-food-special-offers">
            <p>{props.title}</p>

            <div className="more-info-item-food-special-offers">
              <div className="text">{props.moreInfo}</div>
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

              <div className="special-offers">
                <div className="icon"></div>
                <div className="text">{props.special}</div>
              </div>

              {props.warn !== "" && (
                <div class="paragraph-note-close-window">{props.warn}</div>
              )}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
