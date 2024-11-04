import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSkipBackMiniFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M7 6a1 1 0 011 1v10a1 1 0 11-2 0V7a1 1 0 011-1zm2.079 6.409a.5.5 0 010-.818l7.133-5.035a.5.5 0 01.788.409v10.07a.5.5 0 01-.788.409l-7.133-5.035z" />
    </Svg>
  );
}

export default SvgSkipBackMiniFill;
