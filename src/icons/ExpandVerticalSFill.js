import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgExpandVerticalSFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M16.95 7.45L12 2.5 7.051 7.447H11v9.103H7.05L12 21.5l4.95-4.95H13V7.448l3.95.001z" />
    </Svg>
  );
}

export default SvgExpandVerticalSFill;
