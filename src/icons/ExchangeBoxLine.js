import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgExchangeBoxLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M4.005 5.003v14h16v-14h-16zm-1-2h18a1 1 0 011 1v16a1 1 0 01-1 1h-18a1 1 0 01-1-1v-16a1 1 0 011-1zm9 6v-3l5 5h-9v-2h4zm-5 4h9v2h-4v3l-5-5z" />
    </Svg>
  );
}

export default SvgExchangeBoxLine;
