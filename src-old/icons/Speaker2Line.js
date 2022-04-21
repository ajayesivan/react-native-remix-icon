import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSpeaker2Line(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M5 5v14h14V5H5zM4 3h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1zm8 13a4 4 0 100-8 4 4 0 000 8zm0 2a6 6 0 110-12 6 6 0 010 12zm0-4.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
    </Svg>
  );
}

export default SvgSpeaker2Line;
