import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArrowLeftDownLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M9 13.589l8.607-8.607 1.414 1.415-8.607 8.606H18v2H7v-11h2v7.586z" />
    </Svg>
  );
}

export default SvgArrowLeftDownLine;
