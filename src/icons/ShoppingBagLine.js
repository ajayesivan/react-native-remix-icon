import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgShoppingBagLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M7.005 8V6a5 5 0 0110 0v2h3a1 1 0 011 1v12a1 1 0 01-1 1h-16a1 1 0 01-1-1V9a1 1 0 011-1h3zm0 2h-2v10h14V10h-2v2h-2v-2h-6v2h-2v-2zm2-2h6V6a3 3 0 00-6 0v2z" />
    </Svg>
  );
}

export default SvgShoppingBagLine;
