import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgGitCommitLine = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="M15.874 13a4.002 4.002 0 0 1-7.748 0H3v-2h5.126a4.002 4.002 0 0 1 7.748 0H21v2h-5.126zM12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
  </Svg>
);

export default SvgGitCommitLine;
