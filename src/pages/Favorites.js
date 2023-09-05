import { useContext } from "react";

import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

function FavoritesPage() {
  const faveContext = useContext(FavoritesContext);

  let content;

  if (faveContext.totalFavorites === 0) {
    content = <p>A place to save all your Favorite MeetUps</p>;
  } else {
    content = <MeetupList meetups={faveContext.favorites} />;
  }
  return (
    <section>
      <h3> Favorite MeetUps! </h3>
      {content}
    </section>
  );
}

export default FavoritesPage;
