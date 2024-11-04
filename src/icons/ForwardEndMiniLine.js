import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgForwardEndMiniLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M21 6a1 1 0 00-1 1v10a1 1 0 102 0V7a1 1 0 00-1-1zM4 9.86L7.032 12 4 14.14V9.86zm-1.5 7.675a.5.5 0 00.288-.092l7.133-5.035a.5.5 0 000-.817L2.788 6.556A.5.5 0 002 6.965v10.07a.5.5 0 00.5.5zM16.032 12L13 14.14V9.86L16.032 12zm-4.94-5.323a.5.5 0 00-.092.288v10.07a.5.5 0 00.788.408l7.133-5.035a.5.5 0 000-.817l-7.133-5.035a.5.5 0 00-.697.12z" />
    </Svg>
  );
}

export default SvgForwardEndMiniLine;
