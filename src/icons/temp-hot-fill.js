import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgTempHotFill = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="M8 10.255V5a4 4 0 1 1 8 0v5.255a7 7 0 1 1-8 0zm3 1.871A4.002 4.002 0 0 0 12 20a4 4 0 0 0 1-7.874V5h-2v7.126z" />
  </Svg>
);

export default SvgTempHotFill;
