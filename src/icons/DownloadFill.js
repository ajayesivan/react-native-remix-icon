import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgDownloadFill = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="M3 19h18v2H3v-2zM13 9h7l-8 8-8-8h7V1h2v8z" />
  </Svg>
);

export default SvgDownloadFill;
