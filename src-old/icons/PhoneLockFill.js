import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPhoneLockFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M18 2a1 1 0 011 1l.001 7.1A5.002 5.002 0 0013.1 14H12v8H6a1 1 0 01-1-1V3a1 1 0 011-1h12zm0 10a3 3 0 013 3v1h1v5a1 1 0 01-1 1h-6a1 1 0 01-1-1v-5h1v-1a3 3 0 013-3zm0 2c-.513 0-1 .45-1 1v1h2v-1a1 1 0 00-1-1z" />
    </Svg>
  );
}

export default SvgPhoneLockFill;
