import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgDoorClosedLine = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="M3 21v-2h2V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v15h2v2H3zM17 5H7v14h10V5zm-2 6v2h-2v-2h2z" />
  </Svg>
);

export default SvgDoorClosedLine;
