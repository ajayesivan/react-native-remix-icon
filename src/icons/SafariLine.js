import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSafariLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M17.813 6.503l-4.398 6.911-6.911 4.398A7.973 7.973 0 0011 19.938V18h2v1.938a7.96 7.96 0 003.906-1.618l-1.37-1.37 1.414-1.414 1.37 1.37A7.96 7.96 0 0019.939 13h-1.938v-2h1.938a7.974 7.974 0 00-2.126-4.497zm-.315-.315a7.973 7.973 0 00-4.497-2.126V6h-2V4.062A7.96 7.96 0 007.095 5.68l1.37 1.37-1.414 1.414-1.37-1.37A7.96 7.96 0 004.063 11H6v2H4.063a7.973 7.973 0 002.126 4.497l4.398-6.911 6.911-4.398zM12.001 22c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10z" />
    </Svg>
  );
}

export default SvgSafariLine;
