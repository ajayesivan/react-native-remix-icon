import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgNumber2(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M16 7.5a4 4 0 10-8 0H6a6 6 0 1110.663 3.776l-7.32 8.723L18 20v2H6v-1.127l9.064-10.802A3.982 3.982 0 0016 7.5z" />
    </Svg>
  );
}

export default SvgNumber2;
