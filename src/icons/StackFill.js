import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgStackFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M20.083 10.5l1.202.721a.5.5 0 010 .858L12 17.649l-9.285-5.57a.5.5 0 010-.858l1.202-.721L12 15.35l8.083-4.85zm0 4.7l1.202.721a.5.5 0 010 .858l-8.77 5.262a1 1 0 01-1.03 0l-8.77-5.262a.5.5 0 010-.858l1.202-.721L12 20.05l8.083-4.85zM12.514 1.309l8.771 5.262a.5.5 0 010 .858L12 12.999 2.715 7.43a.5.5 0 010-.858l8.77-5.262a1 1 0 011.03 0z" />
    </Svg>
  );
}

export default SvgStackFill;
