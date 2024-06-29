import { ChevronsLeft, ChevronsRight } from "lucide-react";
import "./list.scss";
import ListItem from "../listItem/ListItem";

export default function List() {
  return (
    <div className="list">
      <span className="listTitle">Continue to watch</span>
      <div className="wrapper">
        <ChevronsLeft />
            <div className="container">
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
            </div>
        <ChevronsRight />
      </div>
    </div>
  )
}
