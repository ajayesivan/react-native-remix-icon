import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSpeedMiniLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M9.032 12L6 9.86v4.28L9.032 12zm-4.244 5.443A.5.5 0 014 17.035V6.965a.5.5 0 01.788-.409l7.133 5.035a.5.5 0 010 .817l-7.133 5.035zM15 14.14L18.032 12 15 9.86v4.28zm-2-7.175a.5.5 0 01.788-.409l7.133 5.035a.5.5 0 010 .817l-7.133 5.035a.5.5 0 01-.788-.408V6.965z" />
    </Svg>
  );
}

export default SvgSpeedMiniLine;
