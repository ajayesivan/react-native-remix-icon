import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgFileHistoryFill = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="m16 2 5 4.999v14.01a.992.992 0 0 1-.993.991H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.445 2 3.993 2H16zm-3 7h-2v6h5v-2h-3V9z" />
  </Svg>
);

export default SvgFileHistoryFill;
