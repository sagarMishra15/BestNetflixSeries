import styles from "./Netflix.module.css";

export const SeriesCard = (props) => {
  const { name, img_url, rating, description, genre, watch_url } =
    props.currElem;

  const button_style = {
    padding: "1.2rem 2.4rem",
    /* 
      Example of using conditions on CSS
      backgroundColor: `${rating >= 8.5 ? "green" : "rgb(155, 163, 7)"}`,
    
    */
    backgroundColor: "var(--bnt-hover-bg-color)",
    border: "none",
    fontSize: "1.6rem",
    cursor: "pointer",
  };

  // Using styles.super_hit as this is from a module CSS
  const ratingClass = rating >= 8.5 ? styles.super_hit : styles.average;
  return (
    <li className={styles.card}>
      <div>
        <img src={img_url} alt={name} height="30%" width="30%" />
      </div>
      <div className={styles["card-content"]}>
        <h2>Name: {name}</h2>
        <h3>
          Rating: <span className={ratingClass}>{rating}</span>
        </h3>

        {/* Example of Inline CSS in React */}
        {/* <p style={{ margin: "0.1rem 0rem" }}>Summary: {description}</p> */}
        <p>Summary: {description}</p>
        <p>Genre: {genre.join(",")}</p>
        {/* <p>Cast: {cast}</p> */}
        <a href={watch_url} target="_blank">
          <button style={button_style}>Watch Now</button>
        </a>
      </div>
    </li>
  );
};
