import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgShoppingBagLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M7 8V6a5 5 0 1110 0v2h3a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V9a1 1 0 011-1h3zm0 2H5v10h14V10h-2v2h-2v-2H9v2H7v-2zm2-2h6V6a3 3 0 00-6 0v2z" />
    </Svg>
  );
}

export default SvgShoppingBagLine;
