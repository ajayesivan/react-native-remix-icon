import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgChatAiFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M20.713 8.128l-.246.566a.506.506 0 01-.934 0l-.246-.566a4.363 4.363 0 00-2.22-2.25l-.759-.339a.53.53 0 010-.963l.717-.319a4.366 4.366 0 002.251-2.326l.253-.611a.506.506 0 01.942 0l.253.61a4.366 4.366 0 002.25 2.327l.718.32a.53.53 0 010 .962l-.76.338a4.363 4.363 0 00-2.219 2.251zM20 11c.699 0 1.37-.12 1.993-.339A8 8 0 0114 19v3.5c-5-2-12-5-12-11.5a8 8 0 018-8h4c.114 0 .226.002.339.007A6 6 0 0020 11z" />
    </Svg>
  );
}

export default SvgChatAiFill;
