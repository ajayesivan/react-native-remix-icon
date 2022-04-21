import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFolderSharedFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M22 13.126A6 6 0 0013.303 21H3a1 1 0 01-1-1V4a1 1 0 011-1h7.414l2 2H21a1 1 0 011 1v7.126zM18 17v-3.5l5 4.5-5 4.5V19h-3v-2h3z" />
    </Svg>
  );
}

export default SvgFolderSharedFill;
