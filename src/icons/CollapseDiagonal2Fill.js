import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCollapseDiagonal2Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M3.5 11H11V3.5L7.957 6.543l-3.25-3.25-1.414 1.414 3.25 3.25L3.5 11zm17 2H13v7.5l3.043-3.043 3.25 3.25 1.414-1.414-3.25-3.25L20.5 13z" />
    </Svg>
  );
}

export default SvgCollapseDiagonal2Fill;
