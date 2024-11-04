import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMvAiLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M20.467 8.694l.246-.566a4.363 4.363 0 012.22-2.25l.759-.339a.53.53 0 000-.963l-.717-.319a4.366 4.366 0 01-2.251-2.326l-.253-.611a.506.506 0 00-.942 0l-.253.61a4.366 4.366 0 01-2.25 2.327l-.718.32a.53.53 0 000 .962l.76.338a4.363 4.363 0 012.219 2.251l.246.566c.18.414.753.414.934 0zM2 4a1 1 0 011-1h11v2H4v14h16v-8h2v9a1 1 0 01-1 1H3a1 1 0 01-1-1V4zm10 8.17V6h4v2h-2v7a3 3 0 11-2-2.83z" />
    </Svg>
  );
}

export default SvgMvAiLine;
