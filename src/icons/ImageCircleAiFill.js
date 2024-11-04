import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgImageCircleAiFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M20.467 8.694l.246-.566a4.363 4.363 0 012.22-2.25l.759-.339a.53.53 0 000-.963l-.717-.319a4.366 4.366 0 01-2.251-2.326l-.253-.611a.506.506 0 00-.942 0l-.253.61a4.366 4.366 0 01-2.25 2.327l-.718.32a.53.53 0 000 .962l.76.338a4.363 4.363 0 012.219 2.251l.246.566c.18.414.753.414.934 0zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10c0-.402-.024-.8-.07-1.19l-1.986.235a8.08 8.08 0 01-.368 3.53l-3.869-3.868a1 1 0 00-1.414 0l-7.428 7.428A8 8 0 0114 4.252l.498-1.937C13.698 2.109 12.861 2 12 2zM9 12a2 2 0 100-4 2 2 0 000 4z" />
    </Svg>
  );
}

export default SvgImageCircleAiFill;
