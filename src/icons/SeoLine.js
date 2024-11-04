import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSeoLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M8 3a7 7 0 000 14h1.07a7.06 7.06 0 010-2H8A5 5 0 018 5h8a5 5 0 014.9 6 7.021 7.021 0 011.426 2A7 7 0 0016 3H8zm8 10a3 3 0 100 6 3 3 0 000-6zm-5 3a5 5 0 119.172 2.757l2.535 2.536-1.414 1.414-2.536-2.535A5 5 0 0111 16z" />
    </Svg>
  );
}

export default SvgSeoLine;
