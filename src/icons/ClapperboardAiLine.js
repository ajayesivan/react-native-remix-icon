import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgClapperboardAiLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M20.467 8.694l.246-.566a4.363 4.363 0 012.22-2.25l.759-.339a.53.53 0 000-.963l-.717-.319a4.366 4.366 0 01-2.251-2.326l-.253-.611a.506.506 0 00-.942 0l-.253.61a4.366 4.366 0 01-2.25 2.327l-.718.32a.53.53 0 000 .962l.76.338a4.363 4.363 0 012.219 2.251l.246.566c.18.414.753.414.934 0zM14.307 3h.034A5.99 5.99 0 0014 5c0 .701.12 1.374.341 2h-2.343l2.31-4zM20 11v8H4V6.46L5.998 3H2.992A1 1 0 002 3.993v16.014c0 .548.444.993.992.993h18.016a1 1 0 00.992-.993V11h-2zM8.307 3L5.998 7h3.69l2.31-4h-3.69z" />
    </Svg>
  );
}

export default SvgClapperboardAiLine;
