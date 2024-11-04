import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgTShirt2Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M8.998 3a3 3 0 106 0h6a1 1 0 011 1v7a1 1 0 01-1 1h-2.001l.001 8a1 1 0 01-1 1h-12a1 1 0 01-1-1l-.001-8.001L2.998 12a1 1 0 01-1-1V4a1 1 0 011-1h6zm11 1.999h-3.417l-.017.041a5.002 5.002 0 01-4.35 2.955L11.999 8a5.001 5.001 0 01-4.566-2.96L7.414 5H3.998v5l2.999-.001V19h10.001l-.001-9 3.001-.001v-5z" />
    </Svg>
  );
}

export default SvgTShirt2Line;
