import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgTShirt2Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M20.998 3a1 1 0 011 1v7a1 1 0 01-1 1h-2.001l.001 8a1 1 0 01-1 1h-12a1 1 0 01-1-1l-.001-8.001L2.998 12a1 1 0 01-1-1V4a1 1 0 011-1h6a3 3 0 106 0h6z" />
    </Svg>
  );
}

export default SvgTShirt2Fill;
