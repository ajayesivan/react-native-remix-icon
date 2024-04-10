import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPresentationFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M8 4a2 2 0 11-4 0 2 2 0 014 0zM5 16v6H3V10a3 3 0 015.106-2.137l2.374 2.243 2.313-2.313 1.414 1.414-3.687 3.687L9 11.46V22H7v-6H5zm5-11h9v9h-9v2h4.365l2.824 6h2.21l-2.823-6H20a1 1 0 001-1V4a1 1 0 00-1-1H10v2z" />
    </Svg>
  );
}

export default SvgPresentationFill;
