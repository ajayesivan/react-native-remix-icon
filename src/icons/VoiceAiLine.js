import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgVoiceAiLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M20.713 7.128l-.246.566a.506.506 0 01-.934 0l-.246-.566a4.363 4.363 0 00-2.22-2.25l-.759-.339a.53.53 0 010-.963l.717-.319A4.366 4.366 0 0019.276.931L19.53.32a.506.506 0 01.942 0l.253.61a4.366 4.366 0 002.25 2.327l.718.32a.53.53 0 010 .962l-.76.338a4.363 4.363 0 00-2.219 2.251zM8.5 6h-2v12h2V6zM4 10H2v4h2v-4zm9-8h-2v20h2V2zm4.5 6h-2v10h2V8zm4.5 2h-2v4h2v-4z" />
    </Svg>
  );
}

export default SvgVoiceAiLine;
