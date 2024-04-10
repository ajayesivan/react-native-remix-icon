import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgStarHalfLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 15.968l4.247 2.377-.948-4.773 3.573-3.305-4.833-.573-2.038-4.419v10.693zm0 2.292l-7.053 3.948 1.575-7.928L.588 8.792l8.027-.952L12 .5l3.385 7.34 8.027.952-5.934 5.488 1.575 7.928-7.053-3.948z" />
    </Svg>
  );
}

export default SvgStarHalfLine;
