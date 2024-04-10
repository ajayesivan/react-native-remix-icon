import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPulseLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M9 7.539l6 14L18.66 13H23v-2h-5.66L15 16.461l-6-14L5.34 11H1v2h5.66L9 7.539z" />
    </Svg>
  );
}

export default SvgPulseLine;
