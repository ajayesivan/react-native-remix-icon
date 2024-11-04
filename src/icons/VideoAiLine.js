import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgVideoAiLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M19.713 8.128l-.246.566a.506.506 0 01-.934 0l-.246-.566a4.363 4.363 0 00-2.22-2.25l-.759-.339a.53.53 0 010-.963l.717-.319a4.366 4.366 0 002.251-2.326l.253-.611a.506.506 0 01.942 0l.253.61a4.366 4.366 0 002.25 2.327l.718.32a.53.53 0 010 .962l-.76.338a4.363 4.363 0 00-2.219 2.251zM3.993 3H13v2H5v14h14v-8h2v9.007a.994.994 0 01-.993.993H3.993A.993.993 0 013 20.007V3.993C3 3.445 3.445 3 3.993 3zm6.629 5.415l4.879 3.252a.4.4 0 010 .666l-4.88 3.252a.4.4 0 01-.621-.332V8.747a.4.4 0 01.622-.332z" />
    </Svg>
  );
}

export default SvgVideoAiLine;
