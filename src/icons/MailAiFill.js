import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMailAiFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M20.713 8.128l-.246.566a.506.506 0 01-.934 0l-.246-.566a4.363 4.363 0 00-2.22-2.25l-.759-.339a.53.53 0 010-.963l.717-.319a4.366 4.366 0 002.251-2.326l.253-.611a.506.506 0 01.942 0l.253.61a4.366 4.366 0 002.25 2.327l.718.32a.53.53 0 010 .962l-.76.338a4.363 4.363 0 00-2.219 2.251zM20 11c.701 0 1.374-.12 2-.341V20a1 1 0 01-1 1H2V4a1 1 0 011-1h11.341A5.99 5.99 0 0014 5c0 1.444.51 2.768 1.36 3.803L12 11.683 5.65 6.24l-1.3 1.518L12 14.317l4.886-4.188c.907.553 1.974.871 3.114.871z" />
    </Svg>
  );
}

export default SvgMailAiFill;
