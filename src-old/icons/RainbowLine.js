import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgRainbowLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12 4c6.075 0 11 4.925 11 11v5h-2v-5a9 9 0 00-8.735-8.996L12 6a9 9 0 00-8.996 8.735L3 15v5H1v-5C1 8.925 5.925 4 12 4zm0 4a7 7 0 017 7v5h-2v-5a5 5 0 00-4.783-4.995L12 10a5 5 0 00-4.995 4.783L7 15v5H5v-5a7 7 0 017-7zm0 4a3 3 0 013 3v5h-2v-5a1 1 0 00-.883-.993L12 14a1 1 0 00-.993.883L11 15v5H9v-5a3 3 0 013-3z" />
    </Svg>
  );
}

export default SvgRainbowLine;
