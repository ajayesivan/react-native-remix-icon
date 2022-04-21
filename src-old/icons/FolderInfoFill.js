import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFolderInfoFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12.414 5H21a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h7.414l2 2zM11 9v2h2V9h-2zm0 3v5h2v-5h-2z" />
    </Svg>
  );
}

export default SvgFolderInfoFill;
