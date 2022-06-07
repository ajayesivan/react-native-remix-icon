import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgInboxFill = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm6 9a3 3 0 0 0 6 0h5V5H4v7h5z" />
  </Svg>
);

export default SvgInboxFill;
