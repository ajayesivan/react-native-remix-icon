import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgImageCircleAiLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M20.467 8.694l.246-.566a4.363 4.363 0 012.22-2.25l.759-.339a.53.53 0 000-.963l-.717-.319a4.366 4.366 0 01-2.251-2.326l-.253-.611a.506.506 0 00-.942 0l-.253.61a4.366 4.366 0 01-2.25 2.327l-.718.32a.53.53 0 000 .962l.76.338a4.363 4.363 0 012.219 2.251l.246.566c.18.414.753.414.934 0zM12 4a8 8 0 00-5.135 14.135l7.428-7.428a1 1 0 011.414 0l3.87 3.87a7.992 7.992 0 00.368-3.531l1.985-.237c.046.391.07.789.07 1.191 0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2c.861 0 1.699.11 2.498.315L14 4.252A8.016 8.016 0 0012 4zm-1.187 15.913a7.993 7.993 0 007.825-3.446L15 12.828l-6.41 6.41.003.003a7.942 7.942 0 002.22.672zM11 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </Svg>
  );
}

export default SvgImageCircleAiLine;
