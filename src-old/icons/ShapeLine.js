import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgShapeLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M7.83 20A3.001 3.001 0 114 16.17V7.83A3.001 3.001 0 117.83 4h8.34A3.001 3.001 0 1120 7.83v8.34A3.001 3.001 0 1116.17 20H7.83zm0-2h8.34A3.008 3.008 0 0118 16.17V7.83A3.008 3.008 0 0116.17 6H7.83A3.008 3.008 0 016 7.83v8.34A3.008 3.008 0 017.83 18zM5 6a1 1 0 100-2 1 1 0 000 2zm14 0a1 1 0 100-2 1 1 0 000 2zm0 14a1 1 0 100-2 1 1 0 000 2zM5 20a1 1 0 100-2 1 1 0 000 2z" />
    </Svg>
  );
}

export default SvgShapeLine;
