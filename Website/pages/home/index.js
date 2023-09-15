import {
  faBarcode,
  faBell,
  faCalendar,
  faShoppingCart,
  faUser,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BreakfastList } from "../../Data/Meals/breakfast";
import Meal from "./components/meals";
import { LunchList } from "../../Data/Meals/lunch";
import { DinnerList } from "../../Data/Meals/dinner";
import { SnacksList } from "../../Data/Meals/snacks";
import ProgressBar from "./components/progress";

const Home = () => {
  return (
    <div>
      <div className="header">
        <div className="header-main container">
          <img className="logo" src="./image/logo.png"></img>
          <div className="header-right">
            <FontAwesomeIcon className="icon" icon={faBell} />
            <FontAwesomeIcon className="icon" icon={faUser} />
          </div>
        </div>
      </div>
      <div className="navigation-background">
        <ul className="navigation container">
          <li>
            <FontAwesomeIcon className="icon" icon={faCalendar} />
            <div>Plan</div>
          </li>
          <li>
            <FontAwesomeIcon className="icon" icon={faShoppingCart} />
            <div>Groceries</div>
          </li>
          <li>
            <FontAwesomeIcon className="icon" icon={faUtensils} />
            <div>Meal</div>
          </li>
          <li>
            <FontAwesomeIcon className="icon" icon={faBarcode} />
            <div>Scanner</div>
          </li>
        </ul>
      </div>
      <div className="main-content container">
        <div className="nutrition-section container">
          <div className="nutrition">
            <div className="nutrition-title">Health</div>
            <ProgressBar />
          </div>
          <div className="nutrition">
            <div className="nutrition-title">Food</div>
            <ProgressBar />
          </div>
          <div className="nutrition">
            <div className="nutrition-title">Vitamin</div>
            <ProgressBar />
          </div>
          <div className="nutrition">
            <div className="nutrition-title">Water</div>
            <ProgressBar />
          </div>
        </div>

        <div className="meal-plan">
          <div className="meal-plan-title">Meal Plan</div>
          <div className="meal-option">
            <button class="today">Today</button>
            <button class="week">Week</button>
          </div>
        </div>

        <Meal data={BreakfastList} />
        <Meal data={LunchList} />
        <Meal data={DinnerList} />
        <Meal data={SnacksList} />
      </div>
    </div>
  );
};
export default Home;
