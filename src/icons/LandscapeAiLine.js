import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLandscapeAiLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M6.213 8.628l-.246.566a.506.506 0 01-.934 0l-.246-.566a4.363 4.363 0 00-2.22-2.25l-.759-.339a.53.53 0 010-.963l.717-.319a4.366 4.366 0 002.251-2.326l.253-.611a.506.506 0 01.942 0l.253.61a4.366 4.366 0 002.25 2.327l.718.32a.53.53 0 010 .962l-.76.338a4.363 4.363 0 00-2.219 2.251zM15 6l-3.73 6.216L9 8 2 21h21L15 6zm-.013 13l-2.597-4.762 2.508-4.18L19.667 19h-4.68zm-2.335 0H5.348L9 12.219 12.652 19z" />
    </Svg>
  );
}

export default SvgLandscapeAiLine;
