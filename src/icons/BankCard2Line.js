import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBankCard2Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M3.005 3h18a1 1 0 011 1v16a1 1 0 01-1 1h-18a1 1 0 01-1-1V4a1 1 0 011-1zm17 9h-16v7h16v-7zm0-4V5h-16v3h16z" />
    </Svg>
  );
}

export default SvgBankCard2Line;
