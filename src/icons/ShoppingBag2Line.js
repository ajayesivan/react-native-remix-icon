import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgShoppingBag2Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M20.005 22h-16a1 1 0 01-1-1V3a1 1 0 011-1h16a1 1 0 011 1v18a1 1 0 01-1 1zm-1-2V4h-14v16h14zm-10-14v2a3 3 0 106 0V6h2v2a5 5 0 01-10 0V6h2z" />
    </Svg>
  );
}

export default SvgShoppingBag2Line;
