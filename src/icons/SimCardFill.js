import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSimCardFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M5 2h10l4.707 4.707a1 1 0 01.293.707V21a1 1 0 01-1 1H5a1 1 0 01-1-1V3a1 1 0 011-1zm3 10v6h8v-6H8z" />
    </Svg>
  );
}

export default SvgSimCardFill;
