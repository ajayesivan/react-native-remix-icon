import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgExchangeBoxFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M3.005 3.003h18a1 1 0 011 1v16a1 1 0 01-1 1h-18a1 1 0 01-1-1v-16a1 1 0 011-1zm9 6h-4v2h9l-5-5v3zm-5 4l5 5v-3h4v-2h-9z" />
    </Svg>
  );
}

export default SvgExchangeBoxFill;
