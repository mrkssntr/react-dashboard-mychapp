import { Link } from "react-router-dom";
import { ArrowBackIcon } from "../Icons";

const Item = (props) => {
  const { page } = props;
  var userName = "Gebruiker";

  let timeOfDay;
  const date = new Date();
  const hours = date.getHours();

  if (page === "Start") {
    if (hours < 12) {
      timeOfDay = 'morgen';
    } else if (hours >= 12 && hours < 17) {
      timeOfDay = 'middag';
    } else {
      timeOfDay = 'avond';
    }
    return <div id="page">
        <div className="page__title">Start</div>
          <div className="page__greetins"><h5>Goede<span>{timeOfDay}, {userName}</span></h5></div>
        </div>;
  } else {
    return (
      <div id="page">
        <Link to="/">
          <button className="btn">
            <ArrowBackIcon /> Terug
          </button>
        </Link>
        {page}
      </div>
    );
  }
};
export default Item;