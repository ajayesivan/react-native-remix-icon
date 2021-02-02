import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCreativeCommonsByLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zm2 6a1 1 0 011 1v4h-1.5v4h-3v-4H9v-4a1 1 0 011-1h4zm-2-5a2 2 0 110 4 2 2 0 010-4z" />
    </Svg>
  );
}

export default SvgCreativeCommonsByLine;
