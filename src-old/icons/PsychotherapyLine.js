import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPsychotherapyLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M11 2a8.002 8.002 0 017.934 6.965l2.25 3.539c.148.233.118.58-.225.728L19 14.07V17a2 2 0 01-2 2h-1.999L15 22H6v-3.694c0-1.18-.436-2.297-1.244-3.305A8 8 0 0111 2zm0 2a6 6 0 00-4.684 9.75C7.41 15.114 8 16.667 8 18.306V20h5l.002-3H17v-4.248l1.55-.664-1.543-2.425-.057-.442A6.001 6.001 0 0011 4zm0 3a1 1 0 011 1v1h1a1 1 0 010 2h-1v1a1 1 0 01-2 0v-1.001L9 11a1 1 0 010-2l1-.001V8a1 1 0 011-1z" />
    </Svg>
  );
}

export default SvgPsychotherapyLine;
