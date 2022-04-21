import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCloudy2Line(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M17 21H7A6 6 0 015.008 9.339a7 7 0 1113.984 0A6 6 0 0117 21zM7 19h10a4 4 0 10-.426-7.978 5 5 0 10-9.148 0A4 4 0 107 19z" />
    </Svg>
  );
}

export default SvgCloudy2Line;
