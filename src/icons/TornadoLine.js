import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgTornadoLine = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="M2 3h20v2H2V3zm2 4h16v2H4V7zm4 4h14v2H8v-2zm2 4h8v2h-8v-2zm-2 4h6v2H8v-2z" />
  </Svg>
);

export default SvgTornadoLine;
