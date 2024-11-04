import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgHourglass2Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M4 2h16v4.46L13.537 12 20 17.54V22H4v-4.46L10.463 12 4 6.46V2zm12.297 5L18 5.54V4H6v1.54L7.703 7h8.594zM12 13.317L6 18.46V20h1l5-3 5 3h1v-1.54l-6-5.143z" />
    </Svg>
  );
}

export default SvgHourglass2Fill;
