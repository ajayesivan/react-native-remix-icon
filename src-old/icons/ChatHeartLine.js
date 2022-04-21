import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgChatHeartLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M6.455 19L2 22.5V4a1 1 0 011-1h18a1 1 0 011 1v14a1 1 0 01-1 1H6.455zM4 18.385L5.763 17H20V5H4v13.385zm8.018-3.685l-3.359-3.36a2.25 2.25 0 013.182-3.182l.177.177.177-.177a2.25 2.25 0 013.182 3.182l-3.36 3.359z" />
    </Svg>
  );
}

export default SvgChatHeartLine;
