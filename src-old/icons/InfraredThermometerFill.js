import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgInfraredThermometerFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M21 2v9h-3.001L18 12c0 2.21-1.79 4-4 4h-1.379l-.613 3.111.911 1.321A1 1 0 0112.096 22H3l2.313-10.024L3 11l4-9h14zm-5.001 9h-2.394l-.591 3H14a2 2 0 002-2l-.001-1z" />
    </Svg>
  );
}

export default SvgInfraredThermometerFill;
