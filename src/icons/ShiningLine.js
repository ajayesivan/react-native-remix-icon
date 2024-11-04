import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgShiningLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M1 11c5.523 0 10-4.477 10-10h2c0 5.523 4.477 10 10 10v2c-5.523 0-10 4.477-10 10h-2c0-5.523-4.477-10-10-10v-2zm4.803 1A12.044 12.044 0 0112 18.197 12.043 12.043 0 0118.197 12 12.044 12.044 0 0112 5.803 12.044 12.044 0 015.803 12z" />
    </Svg>
  );
}

export default SvgShiningLine;
