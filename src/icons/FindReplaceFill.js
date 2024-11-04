import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFindReplaceFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0111 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 01-1.969 5.617zM16.659 9A6 6 0 0011 5c-3.315 0-6 2.685-6 6h2a4.001 4.001 0 015.91-3.515L12 9h4.659zM17 11h-2a4.001 4.001 0 01-5.91 3.515L10 13H5.341A6 6 0 0011 17c3.315 0 6-2.685 6-6z" />
    </Svg>
  );
}

export default SvgFindReplaceFill;
