import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLockStarLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M6 7a6 6 0 1112 0v1h1.5A1.5 1.5 0 0121 9.5V13h-2v-3H5v10h8v2H4.5A1.5 1.5 0 013 20.5v-11A1.5 1.5 0 014.5 8H6V7zm10 0a4 4 0 00-8 0v1h8V7zm4.64 13.195l.505 2.946L18.5 21.75l-2.645 1.39.505-2.945-2.14-2.086 2.957-.43L18.5 15l1.323 2.68 2.957.43-2.14 2.085z" />
    </Svg>
  );
}

export default SvgLockStarLine;
