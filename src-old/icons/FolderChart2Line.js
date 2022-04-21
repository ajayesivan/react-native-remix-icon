import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFolderChart2Line(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12.414 5H21a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h7.414l2 2zM4 5v14h16V7h-8.414l-2-2H4zm8 4v4h4a4 4 0 11-4-4z" />
    </Svg>
  );
}

export default SvgFolderChart2Line;
