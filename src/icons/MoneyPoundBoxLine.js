import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMoneyPoundBoxLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M3.005 3.003h18a1 1 0 011 1v16a1 1 0 01-1 1h-18a1 1 0 01-1-1v-16a1 1 0 011-1zm1 2v14h16v-14h-16zm5 8h-1v-2h1v-1A3.5 3.5 0 0115.75 8.69l-1.987.497a1.499 1.499 0 00-2.76.815v1h3v2h-3v2h5v2h-8v-2h1v-2z" />
    </Svg>
  );
}

export default SvgMoneyPoundBoxLine;
