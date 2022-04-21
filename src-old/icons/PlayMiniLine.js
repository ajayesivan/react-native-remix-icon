import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPlayMiniLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M9 8.482v7.036L15.03 12 9 8.482zM7.752 5.44l10.508 6.13a.5.5 0 010 .863l-10.508 6.13A.5.5 0 017 18.128V5.871a.5.5 0 01.752-.432z" />
    </Svg>
  );
}

export default SvgPlayMiniLine;
