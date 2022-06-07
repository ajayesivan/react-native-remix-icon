import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgUsbLine = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="m12 1 3 5h-2v7.381l3-1.499-.001-.882H15V7h4v4h-1.001L18 13.118l-5 2.5v1.553a3 3 0 1 1-2.31.129L6 14l-.001-2.268a2 2 0 1 1 2.001 0V13l3 2.086V6H9l3-5zm0 18a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
  </Svg>
);

export default SvgUsbLine;
