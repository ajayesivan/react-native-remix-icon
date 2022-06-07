import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgMapPinLine = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="m12 20.9 4.95-4.95a7 7 0 1 0-9.9 0L12 20.9zm0 2.828-6.364-6.364a9 9 0 1 1 12.728 0L12 23.728zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
  </Svg>
);

export default SvgMapPinLine;
