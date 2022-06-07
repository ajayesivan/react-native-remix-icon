import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgDoorOpenLine = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="M2 21v-2h2V4.835a1 1 0 0 1 .821-.984l9.472-1.722a.599.599 0 0 1 .707.59v1.28L19 4a1 1 0 0 1 1 1v14h2v2h-4V6h-3v15H2zM13 4.396 6 5.67V19h7V4.396zM12 11v2h-2v-2h2z" />
  </Svg>
);

export default SvgDoorOpenLine;
