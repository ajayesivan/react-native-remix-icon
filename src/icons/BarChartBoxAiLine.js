import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBarChartBoxAiLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M20.713 8.128l-.246.566a.506.506 0 01-.934 0l-.246-.566a4.363 4.363 0 00-2.22-2.25l-.759-.339a.53.53 0 010-.963l.717-.319a4.366 4.366 0 002.251-2.326l.253-.611a.506.506 0 01.942 0l.253.61a4.366 4.366 0 002.25 2.327l.718.32a.53.53 0 010 .962l-.76.338a4.363 4.363 0 00-2.219 2.251zM2 4a1 1 0 011-1h11v2H4v14h16v-8h2v9a1 1 0 01-1 1H3a1 1 0 01-1-1V4zm5 9h2v4H7v-4zm4-6h2v10h-2V7zm4 3h2v7h-2v-7z" />
    </Svg>
  );
}

export default SvgBarChartBoxAiLine;
