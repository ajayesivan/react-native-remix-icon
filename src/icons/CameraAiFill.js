import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCameraAiFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M20.713 8.128l-.246.566a.506.506 0 01-.934 0l-.246-.566a4.363 4.363 0 00-2.22-2.25l-.759-.339a.53.53 0 010-.963l.717-.319a4.366 4.366 0 002.251-2.326l.253-.611a.506.506 0 01.942 0l.253.61a4.366 4.366 0 002.25 2.327l.718.32a.53.53 0 010 .962l-.76.338a4.363 4.363 0 00-2.219 2.251zM22 20v-9.341A5.99 5.99 0 0120 11c-.925 0-1.8-.21-2.583-.583a6 6 0 11-2.834-2.834A5.977 5.977 0 0114 5c0-.701.12-1.374.341-2H9L7 5H3a1 1 0 00-1 1v14a1 1 0 001 1h18a1 1 0 001-1zm-10-3a4 4 0 110-8 4 4 0 010 8z" />
    </Svg>
  );
}

export default SvgCameraAiFill;
