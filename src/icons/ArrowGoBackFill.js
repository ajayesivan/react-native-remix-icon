import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArrowGoBackFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M8 7v4L2 6l6-5v4h5a8 8 0 110 16H4v-2h9a6 6 0 000-12H8z" />
    </Svg>
  );
}

export default SvgArrowGoBackFill;
