import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMovieAiFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M20.713 8.128l-.246.566a.506.506 0 01-.934 0l-.246-.566a4.363 4.363 0 00-2.22-2.25l-.759-.339a.53.53 0 010-.963l.717-.319a4.366 4.366 0 002.251-2.326l.253-.611a.506.506 0 01.942 0l.253.61a4.366 4.366 0 002.25 2.327l.718.32a.53.53 0 010 .962l-.76.338a4.363 4.363 0 00-2.219 2.251zM20 11a5.99 5.99 0 002-.341v9.348a1 1 0 01-.992.993H2.992A.993.993 0 012 20.007V3.993A1 1 0 012.992 3h11.35A6 6 0 0020 11zm-9.378-2.585a.4.4 0 00-.622.332v6.506a.4.4 0 00.622.332l4.879-3.252a.401.401 0 000-.666l-4.88-3.252z" />
    </Svg>
  );
}

export default SvgMovieAiFill;
