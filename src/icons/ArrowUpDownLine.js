import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArrowUpDownLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M11.95 7.95l-1.414 1.414L8 6.828 8 20H6V6.828L3.466 9.364 2.05 7.95 7 3l4.95 4.95zm10 8.1L17 21l-4.95-4.95 1.414-1.414 2.537 2.536L16 4h2v13.172l2.536-2.536 1.414 1.414z" />
    </Svg>
  );
}

export default SvgArrowUpDownLine;