// MY FIRST COMPONENT--------->
const NetflixSeries = () => {
  const name = "Stranger Things";
  // const rating = "9";
  const summary =
    "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.";

  const returnGenre = () => {
    const genre = "Action";
    return genre;
  };

  const age = 1;

  const canWatch = () => {
    if (age >= 18) return "Available";
    return "Not Available";
  };
  return (
    <div>
      <img src="strangerThings.jfif" alt="" />
      <h2>Name: {name}</h2> {/* using variable */}
      <h3>Rating: {5 + 2}</h3> {/* using expression */}
      <p>Summary: {summary}</p>
      {/* using function call */}
      <p>Genre: {returnGenre()}</p>
      {/* using ternery operator */}
      <button>{age >= 18 ? "Watch Now" : "Not Available"}</button>
      {/* using function call  */}
      <button>{canWatch()}</button>
    </div>
  );
};
// Default Export
export default NetflixSeries

//Named Export
export const Header = () => {
    return <h1> ***** List of Best Series *******</h1>;
}

//Named Export
export const Footer = () => {
  return <p>copyrights @SagarMishra</p>;
};