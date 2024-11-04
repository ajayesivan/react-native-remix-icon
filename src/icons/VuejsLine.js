import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgVuejsLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M3.317 3L12 18l8.684-15h2.316l-11 19-11-19h2.316zm4.342 0L12 10.5 16.343 3h2.316L12 14.5 5.343 3H7.66z" />
    </Svg>
  );
}

export default SvgVuejsLine;
