import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSurroundSoundFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M3 3h18a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1zm4.05 4.121A6.978 6.978 0 005 12.071c0 1.933.784 3.683 2.05 4.95l1.414-1.414A4.984 4.984 0 017 12.07c0-1.38.56-2.63 1.464-3.535L7.05 7.12zm9.9 0l-1.414 1.415A4.984 4.984 0 0117 12.07c0 1.38-.56 2.63-1.464 3.536l1.414 1.414A6.978 6.978 0 0019 12.07a6.978 6.978 0 00-2.05-4.95zM12 15.071a3 3 0 100-6 3 3 0 000 6zm0-2a1 1 0 110-2 1 1 0 010 2z" />
    </Svg>
  );
}

export default SvgSurroundSoundFill;
