import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBarChartBoxAiFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M20.713 8.128l-.246.566a.506.506 0 01-.934 0l-.246-.566a4.363 4.363 0 00-2.22-2.25l-.759-.339a.53.53 0 010-.963l.717-.319a4.366 4.366 0 002.251-2.326l.253-.611a.506.506 0 01.942 0l.253.61a4.366 4.366 0 002.25 2.327l.718.32a.53.53 0 010 .962l-.76.338a4.363 4.363 0 00-2.219 2.251zM22 20v-9.341A5.99 5.99 0 0120 11a5.972 5.972 0 01-3-.803V17h-2v-7h1.682A5.994 5.994 0 0114 5c0-.701.12-1.374.341-2H3a1 1 0 00-1 1v16a1 1 0 001 1h18a1 1 0 001-1zM7 13h2v4H7v-4zm4-6h2v10h-2V7z" />
    </Svg>
  );
}

export default SvgBarChartBoxAiFill;
