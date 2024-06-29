import { CirclePlay, Info } from "lucide-react";
import "./featured.scss";

export default function Featured({type}) {
  return (
    <div className="featured">
        {type && (
            <div className="category">
                <span>{type === "movies" ? "Movies" : "Series"}</span>
                <select name="genre" id="genre">
                    <option>Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="award-winning">Award Winning</option>
                    <option value="documentary">Documentary</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-Fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="sports">Sports</option>
                </select>
            </div>
        )}
      <img 
          src="/img/featured/slider1.webp"
          alt="cover"
          width="100%"
        />
      <div className="info">
        <img 
            src="/img/featured/slider1Logo.png" 
            alt="logo" 
        />
        <span className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem tempora ratione quae nisi obcaecati exercitationem eius, esse, ducimus aperiam cupiditate labore quas possimus, adipisci repudiandae fugiat nesciunt autem commodi modi.
        </span>
        <div className="buttons">
            <button className="play">
                <CirclePlay />
                <span>Play</span>
            </button>
            <button className="more">
                <Info />
                <span>More Info</span>
            </button>
        </div>
      </div>
    </div>
  );
}
