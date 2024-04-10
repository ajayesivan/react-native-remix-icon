import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCollapseDiagonalFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M20.5 11H13V3.5l3.043 3.043 3.25-3.25 1.414 1.414-3.25 3.25L20.5 11zm-17 2H11v7.5l-3.043-3.043-3.25 3.25-1.414-1.414 3.25-3.25L3.5 13z" />
    </Svg>
  );
}

export default SvgCollapseDiagonalFill;
