import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArrowRightUpLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.59 8H7.003V6h11v11h-2V9.414z" />
    </Svg>
  );
}

export default SvgArrowRightUpLine;
