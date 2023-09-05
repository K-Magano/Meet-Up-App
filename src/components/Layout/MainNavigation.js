import { useContext } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
// Importing styles
import classes from "./MainNavigation.module.css";
import FavoritesContext from "../../store/favorites-context";

function MainNavigation() {
  const faveContext = useContext(FavoritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>BCL MeetUps</div>
      <nav>
        <ul>
          <li>
            <Link to="/"> All Meetups</Link>
          </li>{" "}
          <li>
            <Link to="/new-meetup"> Add New Meet-Ups</Link>
          </li>{" "}
          <li>
            <Link to="/favorites">
              {" "}
              Favorite Meet-Ups{" "}
              <span className={classes.badge}>
                {faveContext.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
