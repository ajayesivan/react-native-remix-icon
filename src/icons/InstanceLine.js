import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgInstanceLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M4.5 7.653v8.694l7.5 4.342 7.5-4.342V7.653L12 3.311 4.5 7.653zM12 1l9.5 5.5v11L12 23l-9.5-5.5v-11L12 1zM6.499 9.97L11 12.577v5.049h2v-5.049l4.501-2.605-1.002-1.731L12 10.844 7.501 8.24 6.499 9.97z" />
    </Svg>
  );
}

export default SvgInstanceLine;
