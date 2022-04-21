import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPrinterFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M7 17h10v5H7v-5zm12 3v-5H5v5H3a1 1 0 01-1-1V9a1 1 0 011-1h18a1 1 0 011 1v10a1 1 0 01-1 1h-2zM5 10v2h3v-2H5zm2-8h10a1 1 0 011 1v3H6V3a1 1 0 011-1z" />
    </Svg>
  );
}

export default SvgPrinterFill;
