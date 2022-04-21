import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPhoneLockLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M18 2a1 1 0 011 1v7h-2V4H7v16h5v2H6a1 1 0 01-1-1V3a1 1 0 011-1h12zm0 10a3 3 0 013 3v1h1v5a1 1 0 01-1 1h-6a1 1 0 01-1-1v-5h1v-1a3 3 0 013-3zm2 6h-4v2h4v-2zm-2-4c-.508 0-1 .45-1 1v1h2v-1a1 1 0 00-1-1z" />
    </Svg>
  );
}

export default SvgPhoneLockLine;
