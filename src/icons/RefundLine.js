import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgRefundLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M20.005 8V5h-16v3h16zm0 2h-16v9h16v-9zm-17-7h18a1 1 0 011 1v16a1 1 0 01-1 1h-18a1 1 0 01-1-1V4a1 1 0 011-1zm8 11h6v2h-10.5l4.5-4.5V14z" />
    </Svg>
  );
}

export default SvgRefundLine;
