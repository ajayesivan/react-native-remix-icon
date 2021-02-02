import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgShuffleLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M18 17.883V16l5 3-5 3v-2.09a9 9 0 01-6.997-5.365L11 14.54l-.003.006A9 9 0 012.725 20H2v-2h.725a7 7 0 006.434-4.243L9.912 12l-.753-1.757A7 7 0 002.725 6H2V4h.725a9 9 0 018.272 5.455L11 9.46l.003-.006A9 9 0 0118 4.09V2l5 3-5 3V6.117a7 7 0 00-5.159 4.126L12.088 12l.753 1.757A7 7 0 0018 17.883z" />
    </Svg>
  );
}

export default SvgShuffleLine;
