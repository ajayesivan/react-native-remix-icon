import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgVideoOnAiFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M4.713 9.128l-.246.566a.506.506 0 01-.934 0l-.246-.566a4.363 4.363 0 00-2.22-2.25l-.759-.339a.53.53 0 010-.963l.717-.319a4.366 4.366 0 002.251-2.326l.253-.611a.506.506 0 01.942 0l.253.61a4.366 4.366 0 002.25 2.327l.718.32a.53.53 0 010 .962l-.76.338a4.363 4.363 0 00-2.219 2.251zM10 6a6 6 0 01-9 5.197V19a1 1 0 001 1h14a1 1 0 001-1v-4.2l5.213 3.65a.5.5 0 00.787-.41V5.96a.5.5 0 00-.787-.41L17 9.2V5a1 1 0 00-1-1H9.659A5.99 5.99 0 0110 6z" />
    </Svg>
  );
}

export default SvgVideoOnAiFill;
