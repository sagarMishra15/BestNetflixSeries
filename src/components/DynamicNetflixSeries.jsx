import seriesData from "../api/SeriesData.json";
import { SeriesCard } from "./Lists";

const DynamicNetflixSeries = () => {
  return (
    <div>
      <ul className="grid grid-three--cols">
        {seriesData.map((currE) => (
          /* 
          here DynamicNetflixSeries is parent component
          SeriesCard is child component and currEle={currElem} is props(property)
        */
          <SeriesCard key={currE.id} currElem={currE} />
        ))}
      </ul>
    </div>
  );
};

export default DynamicNetflixSeries;
