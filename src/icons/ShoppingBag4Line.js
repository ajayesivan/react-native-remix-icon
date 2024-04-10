import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgShoppingBag4Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M9 6h6a3 3 0 10-6 0zM7 6a5 5 0 0110 0h3a1 1 0 011 1v14a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1h3zM5 8v12h14V8H5zm4 2a3 3 0 106 0h2a5 5 0 01-10 0h2z" />
    </Svg>
  );
}

export default SvgShoppingBag4Line;
