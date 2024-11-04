import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSafe3Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M3 3a1 1 0 00-1 1v15a1 1 0 001 1h1v2h2v-2h12v2h2v-2h1a1 1 0 001-1V4a1 1 0 00-1-1H3zm12.35 5.236l1.332-1.332 1.414 1.414-1.333 1.333a3.757 3.757 0 010 3.698l1.333 1.333-1.414 1.414-1.333-1.333a3.758 3.758 0 01-3.698 0l-1.333 1.333-1.414-1.414 1.333-1.333a3.757 3.757 0 010-3.698L8.904 8.318l1.414-1.414 1.333 1.332a3.757 3.757 0 013.698 0zm-.613 2.026a1.75 1.75 0 10-2.474 2.475 1.75 1.75 0 002.474-2.475zM5 8h2v7H5V8z" />
    </Svg>
  );
}

export default SvgSafe3Fill;
