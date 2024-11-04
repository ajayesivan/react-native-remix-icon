import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgExpandHorizontalSLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M7.45 7.05L2.5 12l4.947 4.947 1.414-1.414L6.328 13h11.343l-2.535 2.535 1.414 1.414L21.5 12l-4.95-4.95-1.414 1.415L17.672 11H6.328l2.536-2.535L7.45 7.05z" />
    </Svg>
  );
}

export default SvgExpandHorizontalSLine;
