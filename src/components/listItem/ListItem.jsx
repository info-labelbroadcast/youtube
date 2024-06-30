import { Play, Plus, ThumbsDown, ThumbsUp } from "lucide-react";
import "./listItem.scss";
import { useState } from "react";

export default function ListItem({ index }) {
    const [isHovered, setIsHovered] = useState(false);
    const trailer = "https://www.labelbroadcast.com/file/star_wars.mp4";

  return (
    <div 
        className="listItem" 
        style={{left:isHovered && index * 215 - 40 + index * 7}}
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)}
    >
      <img src="/img/favourites/f5.webp" alt="thumbnail" />
      {isHovered && (
       <>
        <video src={trailer} autoPlay={true} loop />
        <div className="itemInfo">
            <div className="icons">
                <div>
                    <Play className="icon" size={18} />
                    <Plus className="icon"size={18}  />
                    <ThumbsUp className="icon" size={18} />
                    <ThumbsDown className="icon" size={18} />
                </div>
                <div className="genre">Action</div>
            </div>
            <div className="itemInfoTop">
                <span>1hr 14min</span>
                <span className="limit">PG</span>
                <span>2008</span>
            </div>
            <div className="desc">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum incidunt quam rerum, quos vero quae perspiciatis earum vitae corrupti eligendi deserunt sit assumenda. Temporibus error, officiis eos obcaecati quod sequi?
            </div>
        </div>
       </>
      )}
    </div>
  )
}