import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFilePaperFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M3 15V3a1 1 0 011-1h16a1 1 0 011 1v16a3 3 0 01-3 3H4a3 3 0 01-3-3v-2h16v2a1 1 0 002 0v-4H3z" />
    </Svg>
  );
}

export default SvgFilePaperFill;
