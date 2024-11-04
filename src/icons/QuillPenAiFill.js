import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgQuillPenAiFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M4.713 7.128l-.246.566a.506.506 0 01-.934 0l-.246-.566a4.363 4.363 0 00-2.22-2.25l-.759-.339a.53.53 0 010-.963l.717-.319A4.366 4.366 0 003.276.931L3.53.32a.506.506 0 01.942 0l.253.61a4.366 4.366 0 002.25 2.327l.718.32a.53.53 0 010 .962l-.76.338a4.363 4.363 0 00-2.219 2.251zm-1.65 14.485C4.09 15.422 6.312 1.997 21 1.997c-1.496 3-2.5 4.5-3.5 5.5l-1 1 1.5 1c-1 3-4 6.5-8 7-2.669.333-4.336 2.166-5.002 5.5H3l.064-.384z" />
    </Svg>
  );
}

export default SvgQuillPenAiFill;
