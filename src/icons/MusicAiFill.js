import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMusicAiFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M18.713 8.128l-.246.566a.506.506 0 01-.934 0l-.246-.566a4.363 4.363 0 00-2.22-2.25l-.759-.339a.53.53 0 010-.963l.717-.319a4.366 4.366 0 002.251-2.326l.253-.611a.506.506 0 01.942 0l.253.61a4.366 4.366 0 002.25 2.327l.718.32a.53.53 0 010 .962l-.76.338a4.363 4.363 0 00-2.219 2.251zM7 3h5v3H9v11a4 4 0 11-2-3.465V3zm11 10.535V11h2v6a4 4 0 11-2-3.465z" />
    </Svg>
  );
}

export default SvgMusicAiFill;
