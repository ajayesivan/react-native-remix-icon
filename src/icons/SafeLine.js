import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSafeLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M18.005 20h-12v2h-2v-2h-1a1 1 0 01-1-1V4a1 1 0 011-1h18a1 1 0 011 1v15a1 1 0 01-1 1h-1v2h-2v-2zm-14-2h16V5h-16v13zm9-4.126V17h-2v-3.126a4.002 4.002 0 011-7.874 4 4 0 011 7.874zm-1-1.874a2 2 0 100-4 2 2 0 000 4z" />
    </Svg>
  );
}

export default SvgSafeLine;
