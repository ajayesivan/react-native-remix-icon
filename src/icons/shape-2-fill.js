import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgShape2Fill = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="M2 2h5v5H2V2zm0 15h5v5H2v-5zM17 2h5v5h-5V2zm0 15h5v5h-5v-5zM8 4h8v2H8V4zM4 8h2v8H4V8zm14 0h2v8h-2V8zM8 18h8v2H8v-2z" />
  </Svg>
);

export default SvgShape2Fill;
