import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgSignalWifiLine = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="M12 3c4.284 0 8.22 1.497 11.31 3.996L12 21 .69 6.997A17.917 17.917 0 0 1 12 3zm0 2c-3.028 0-5.923.842-8.42 2.392L12 17.817 20.42 7.39A15.928 15.928 0 0 0 12 5z" />
  </Svg>
);

export default SvgSignalWifiLine;
