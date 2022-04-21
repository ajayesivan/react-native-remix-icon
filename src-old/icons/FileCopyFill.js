import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFileCopyFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M7 6V3a1 1 0 011-1h12a1 1 0 011 1v14a1 1 0 01-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 013 21l.003-14c0-.552.45-1 1.007-1H7zm2 0h8v10h2V4H9v2z" />
    </Svg>
  );
}

export default SvgFileCopyFill;
