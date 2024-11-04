import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgExpandVerticalSLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M16.95 7.45L12 2.5 7.051 7.447 8.466 8.86 11 6.328V17.67l-2.536-2.535L7.05 16.55 12 21.5l4.95-4.95-1.414-1.414-2.537 2.536V6.328l2.536 2.535 1.414-1.414z" />
    </Svg>
  );
}

export default SvgExpandVerticalSLine;
