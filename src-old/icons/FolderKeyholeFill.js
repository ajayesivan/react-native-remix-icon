import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFolderKeyholeFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M10.414 3l2 2H21a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h7.414zM12 9a2 2 0 00-1 3.732V17h2l.001-4.268A2 2 0 0012 9z" />
    </Svg>
  );
}

export default SvgFolderKeyholeFill;
