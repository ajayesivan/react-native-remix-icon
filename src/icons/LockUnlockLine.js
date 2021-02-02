import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLockUnlockLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M7 10h13a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V11a1 1 0 011-1h1V9a7 7 0 0113.262-3.131l-1.789.894A5 5 0 007 9v1zm-2 2v8h14v-8H5zm5 3h4v2h-4v-2z" />
    </Svg>
  );
}

export default SvgLockUnlockLine;
