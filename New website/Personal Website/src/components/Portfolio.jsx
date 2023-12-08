import NavBar from "./NavBar";

export default function Portfolio() {
  return (
    <>
      <NavBar />
      <div>
        <h1>Programming Projects</h1>
        <h2>Studio Drink</h2>
        <img src="" />
        <p>
          Studio Drink is a full stack web application that combines two
          powerful remote APIs (Spotify and The Cocktail DB) with our local
          database, creating a site that leverages hundreds of drink recipes and
          millions of Spotify artists and genres. The user inputs any artist or
          genre on Spotify and receives a curated beverage from the connected
          external cocktail database. Users can create new drinks, add drinks to
          favorites, browse all local and external drinks, toggle
          alcoholic/nonalcoholic, and search drinks. The app also features an
          embedded Spotify player and multiple types of lazy loading including a
          custom pagination algorithm. Additionally, we prioritized creating a
          seamless and beautiful user experience with maximized customization in
          pure CSS (including, but not limited to: day/night mode toggle, custom
          side navigation, custom snackbar alerts, flip cards, and transition
          animations).
        </p>
        <h3>Project tech stack:</h3>
        <p>
          JavaScript | React | HTML | CSS | Express | Node.js | SQL | PostgreSQL
          | Material UI | BCrypt | Cypress
        </p>
        <h1>Art Projects</h1>
      </div>
    </>
  );
}
