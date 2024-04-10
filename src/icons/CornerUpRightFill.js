import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCornerUpRightFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M5 10v9h2v-7h7.586v5.414L21 11l-6.414-6.414V10H5z" />
    </Svg>
  );
}

export default SvgCornerUpRightFill;
