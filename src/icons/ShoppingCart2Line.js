import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgShoppingCart2Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M4.004 6.417L.762 3.174 2.176 1.76l3.243 3.243H20.66a1 1 0 01.958 1.287l-2.4 8a1 1 0 01-.958.713H6.004v2h11v2h-12a1 1 0 01-1-1V6.417zm2 .586v6h11.512l1.8-6H6.004zm-.5 16a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm12 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
    </Svg>
  );
}

export default SvgShoppingCart2Line;
