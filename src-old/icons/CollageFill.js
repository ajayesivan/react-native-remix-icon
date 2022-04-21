import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCollageFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M11.189 13.157L12.57 21H4a1 1 0 01-1-1v-5.398l8.189-1.445zM20 3a1 1 0 011 1v16a1 1 0 01-1 1h-5.398L11.428 3H20zM9.397 3l1.444 8.188L3 12.57V4a1 1 0 011-1h5.397z" />
    </Svg>
  );
}

export default SvgCollageFill;
