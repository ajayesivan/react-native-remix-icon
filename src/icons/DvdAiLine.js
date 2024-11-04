import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgDvdAiLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M20.713 8.128l-.246.566a.506.506 0 01-.934 0l-.246-.566a4.363 4.363 0 00-2.22-2.25l-.759-.339a.53.53 0 010-.963l.717-.319a4.366 4.366 0 002.251-2.326l.253-.611a.506.506 0 01.942 0l.253.61a4.366 4.366 0 002.25 2.327l.718.32a.53.53 0 010 .962l-.76.338a4.363 4.363 0 00-2.219 2.251zM12 4a8 8 0 107.944 7.045l1.986-.236c.046.391.07.789.07 1.191 0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2c.861 0 1.699.11 2.498.315L14 4.252A8.016 8.016 0 0012 4zm1 7h3l-5 7v-5H8l5-7v5z" />
    </Svg>
  );
}

export default SvgDvdAiLine;
