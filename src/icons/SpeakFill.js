import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSpeakFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M9 2a8.002 8.002 0 017.934 6.965l2.25 3.539c.148.233.118.58-.225.728L17 14.07V17a2 2 0 01-2 2h-1.999L13 22H4v-3.694c0-1.18-.436-2.297-1.244-3.305A8 8 0 019 2zm12.154 16.102l-1.665-1.11A8.959 8.959 0 0021 12a8.958 8.958 0 00-1.51-4.993l1.664-1.11A10.948 10.948 0 0123 12c0 2.258-.68 4.356-1.846 6.102z" />
    </Svg>
  );
}

export default SvgSpeakFill;
