import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgAspectRatioFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M21 3a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h18zm-3 9h-2v3h-3v2h5v-5zm-7-5H6v5h2V9h3V7z" />
    </Svg>
  );
}

export default SvgAspectRatioFill;
