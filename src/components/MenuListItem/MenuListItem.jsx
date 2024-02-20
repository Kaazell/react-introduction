import s from "./style.module.css";
import { useState } from "react";

export function MenuListItem(props) {
  const [isHovered, setIsHovered] = useState(false);
  console.log(isHovered);

  return (
    <div
      style={{ backgroundColor: isHovered ? "#a5e9ff" : "#eff0ef" }}
      className={s.container}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      Set to : {props.difficulty}
    </div>
  );
}
