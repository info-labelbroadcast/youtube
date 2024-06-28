import { CirclePlay, Info } from "lucide-react";
import "./featured.scss";

export default function Featured({type}) {
  return (
    <div className="featured">
        {type && (
            <div className="category"></div>
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
