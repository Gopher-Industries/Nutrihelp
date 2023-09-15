import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
const Meal = (props) => {
  const { data } = props;

  return (
    <div className="food">
      <div className="food-header">
        <div className="food-title">{data.title}</div>
        <div className="food-recommendation">
          <div>Recommended</div>
          <div>
            {data.min} - {data.max} KJ
          </div>
        </div>
      </div>
      <div className="food-list">
        {data.list.map((item) => (
          <div className="food-details" key={item.id}>
            <img className="food-pfp" src={item.avatar} />
            <div className="food-name">{item.name}</div>
            <div className="food-description">{item.description}</div>
          </div>
        ))}
        <div className="food-more">
          <FontAwesomeIcon className="icon" icon={faPlus} />
        </div>
      </div>
    </div>
  );
};
export default Meal;
