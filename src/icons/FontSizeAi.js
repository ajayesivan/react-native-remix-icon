import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFontSizeAi(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M19.467 8.694l.246-.566a4.363 4.363 0 012.22-2.25l.759-.339a.53.53 0 000-.963l-.717-.319a4.366 4.366 0 01-2.251-2.326l-.253-.611a.506.506 0 00-.942 0l-.253.61a4.366 4.366 0 01-2.25 2.327l-.718.32a.53.53 0 000 .962l.76.338a4.363 4.363 0 012.219 2.251l.246.566c.18.414.753.414.934 0zM4.754 15h6.492l2 5H15.4L9 4H7L.6 20h2.154l2-5zM8 6.885L10.446 13H5.554L8 6.885zM21 12v.535a4 4 0 100 6.93V20h2v-8h-2zm0 4a2 2 0 11-4 0 2 2 0 014 0z" />
    </Svg>
  );
}

export default SvgFontSizeAi;
