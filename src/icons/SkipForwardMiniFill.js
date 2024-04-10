import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSkipForwardMiniFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M7.788 17.444A.5.5 0 017 17.035V6.965a.5.5 0 01.788-.409l7.133 5.035a.499.499 0 010 .818l-7.133 5.034zM16 7a1 1 0 112 0v10a1 1 0 11-2 0V7z" />
    </Svg>
  );
}

export default SvgSkipForwardMiniFill;
