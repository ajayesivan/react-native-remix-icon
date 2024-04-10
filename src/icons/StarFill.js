import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgStarFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 18.26l-7.053 3.948 1.575-7.928L.588 8.792l8.027-.952L12 .5l3.385 7.34 8.027.952-5.934 5.488 1.575 7.928-7.053-3.948z" />
    </Svg>
  );
}

export default SvgStarFill;
