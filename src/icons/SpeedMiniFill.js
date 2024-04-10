import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSpeedMiniFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M4.788 17.443A.5.5 0 014 17.035V6.965a.5.5 0 01.788-.409l7.133 5.035a.5.5 0 010 .817l-7.133 5.035zM13 6.965a.5.5 0 01.788-.409l7.133 5.035a.5.5 0 010 .817l-7.133 5.035a.5.5 0 01-.788-.408V6.965z" />
    </Svg>
  );
}

export default SvgSpeedMiniFill;
