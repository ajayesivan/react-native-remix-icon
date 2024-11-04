import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLandscapeAiFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M6.213 8.628l-.246.566a.506.506 0 01-.934 0l-.246-.566a4.363 4.363 0 00-2.22-2.25l-.759-.339a.53.53 0 010-.963l.717-.319a4.366 4.366 0 002.251-2.326l.253-.611a.506.506 0 01.942 0l.253.61a4.366 4.366 0 002.25 2.327l.718.32a.53.53 0 010 .962l-.76.338a4.363 4.363 0 00-2.219 2.251zm5.025 3.642L16 21h7L15 6l-3.762 6.27zM14 21L8 10 2 21h12z" />
    </Svg>
  );
}

export default SvgLandscapeAiFill;
