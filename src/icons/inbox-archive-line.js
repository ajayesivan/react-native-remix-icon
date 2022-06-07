import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgInboxArchiveLine = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="M4 3h16l2 4v13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.004L4 3zm16 6H4v10h16V9zm-.236-2-1-2H5.237l-1 2h15.527zM13 14h3l-4 4-4-4h3v-4h2v4z" />
  </Svg>
);

export default SvgInboxArchiveLine;
