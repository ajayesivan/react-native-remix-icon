import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgRainbowFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12 4c6.075 0 11 4.925 11 11v5h-3v-5a8 8 0 00-7.75-7.996L12 7a8 8 0 00-7.996 7.75L4 15v5H1v-5C1 8.925 5.925 4 12 4zm0 4a7 7 0 017 7v5h-3v-5a4 4 0 00-3.8-3.995L12 11a4 4 0 00-3.995 3.8L8 15v5H5v-5a7 7 0 017-7zm0 4a3 3 0 013 3v5H9v-5a3 3 0 013-3z" />
    </Svg>
  );
}

export default SvgRainbowFill;
