import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArrowRightWideFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M15.632 12l-4.748-8.968-1.768.936L13.368 12l-4.252 8.032 1.768.936L15.632 12z" />
    </Svg>
  );
}

export default SvgArrowRightWideFill;
