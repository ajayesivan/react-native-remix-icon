import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCornerDownRightFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M5 14V5h2v7h7.586V6.586L21 13l-6.414 6.414V14H5z" />
    </Svg>
  );
}

export default SvgCornerDownRightFill;
