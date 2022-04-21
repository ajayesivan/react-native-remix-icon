import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMiniProgramLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm1-6a3.5 3.5 0 11-4.977-3.174 1 1 0 11.845 1.813A1.5 1.5 0 1011 14v-4a3.5 3.5 0 114.977 3.174 1 1 0 01-.845-1.813A1.5 1.5 0 1013 10v4z" />
    </Svg>
  );
}

export default SvgMiniProgramLine;
