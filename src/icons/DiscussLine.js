import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgDiscussLine = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="M14 22.5 11.2 19H6a1 1 0 0 1-1-1V7.103a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1V18a1 1 0 0 1-1 1h-5.2L14 22.5zm1.839-5.5H21V8.103H7V17h5.161L14 19.298 15.839 17zM2 2h17v2H3v11H1V3a1 1 0 0 1 1-1z" />
  </Svg>
);

export default SvgDiscussLine;
