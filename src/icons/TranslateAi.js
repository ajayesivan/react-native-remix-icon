import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgTranslateAi(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M19.713 8.128l-.246.566a.506.506 0 01-.934 0l-.246-.566a4.363 4.363 0 00-2.22-2.25l-.759-.339a.53.53 0 010-.963l.717-.319a4.366 4.366 0 002.251-2.326l.253-.611a.506.506 0 01.942 0l.253.61a4.366 4.366 0 002.25 2.327l.718.32a.53.53 0 010 .962l-.76.338a4.363 4.363 0 00-2.219 2.251zM5 17v-2H3v2a4 4 0 004 4h3v-2H7l-.15-.006A2 2 0 015 17zm17.4 4L18 10h-2l-4.399 11h2.154l1.199-3h4.09l1.201 3H22.4zm-6.647-5L17 12.885 18.245 16h-2.492zM8 4V2H6v2H2v7h4v3h2v-3h4V4H8zM4 6h2v3H4V6zm4 0h2v3H8V6z" />
    </Svg>
  );
}

export default SvgTranslateAi;
