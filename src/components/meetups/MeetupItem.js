import { useContext } from "react";
import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import FavoritesContext from "../../store/favorites-context";

function MeetupItem(props) {
  const FaveContext = useContext(FavoritesContext);

  const itemIsFavorite = FaveContext.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      FaveContext.removeFavorite(props.id);
    } else {
      FaveContext.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />;
        </div>
        <div>
          <div className={classes.content}>
            <h3>{props.title}</h3>
            <address> {props.address}</address>
            <p>{props.description}</p>
          </div>
          <div className={classes.actions}>
            {" "}
            <button onClick={toggleFavoriteStatusHandler}>
              {itemIsFavorite ? "Remove from Faves" : "Add To Faves"}
            </button>
          </div>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
