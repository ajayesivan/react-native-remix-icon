import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgIncreaseDecreaseLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M3.005 3.003h18a1 1 0 011 1v16a1 1 0 01-1 1h-18a1 1 0 01-1-1v-16a1 1 0 011-1zm1 2v14h16v-14h-16zm5 6h2v2h-2v2h-2v-2h-2v-2h2v-2h2v2zm4 0h6v2h-6v-2z" />
    </Svg>
  );
}

export default SvgIncreaseDecreaseLine;
