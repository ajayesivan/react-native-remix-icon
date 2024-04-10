import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgChatHeartLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M6.455 19L2 22.5V4a1 1 0 011-1h18a1 1 0 011 1v14a1 1 0 01-1 1H6.455zM4 18.385L5.763 17H20V5H4v13.385zm8.018-3.685L8.659 11.34a2.25 2.25 0 013.182-3.182l.177.177.176-.177a2.25 2.25 0 013.182 3.182L12.018 14.7z" />
    </Svg>
  );
}

export default SvgChatHeartLine;
