import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgCheckboxIndeterminateLine = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h14V5H5zm2 6h10v2H7v-2z" />
  </Svg>
);

export default SvgCheckboxIndeterminateLine;
