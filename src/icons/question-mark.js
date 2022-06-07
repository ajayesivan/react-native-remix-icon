import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgQuestionMark = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="M12 19a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 12 19zm0-17a6 6 0 0 1 6 6c0 2.165-.753 3.29-2.674 4.923C13.399 14.56 13 15.297 13 17h-2c0-2.474.787-3.695 3.031-5.601C15.548 10.11 16 9.434 16 8c0-2.21-1.79-4-4-4S8 5.79 8 8v1H6V8a6 6 0 0 1 6-6z" />
  </Svg>
);

export default SvgQuestionMark;
