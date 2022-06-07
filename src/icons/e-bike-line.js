import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgEBikeLine = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="M15.5 6.937A6.997 6.997 0 0 1 19 13v8h-4.17a3.001 3.001 0 0 1-5.66 0H5v-8a6.997 6.997 0 0 1 3.5-6.063A3.974 3.974 0 0 1 8.125 6H5V4h3.126a4.002 4.002 0 0 1 7.748 0H19v2h-3.126a4.02 4.02 0 0 1-.373.937zm-1.453 1.5A3.976 3.976 0 0 1 12 9a3.981 3.981 0 0 1-2.047-.563A5.001 5.001 0 0 0 7 13v6h2v-4a3 3 0 0 1 6 0v4h2v-6a5.001 5.001 0 0 0-2.953-4.563zM12 14a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0-1-1zm0-7a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
  </Svg>
);

export default SvgEBikeLine;
