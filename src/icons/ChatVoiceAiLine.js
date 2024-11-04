import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgChatVoiceAiLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M20.713 8.128l-.246.566a.506.506 0 01-.934 0l-.246-.566a4.363 4.363 0 00-2.22-2.25l-.759-.339a.53.53 0 010-.963l.717-.319a4.366 4.366 0 002.251-2.326l.253-.611a.506.506 0 01.942 0l.253.61a4.366 4.366 0 002.25 2.327l.718.32a.53.53 0 010 .962l-.76.338a4.363 4.363 0 00-2.219 2.251zM12 2C6.477 2 2 6.477 2 12a9.969 9.969 0 002.929 7.071L2 22h10c5.523 0 10-4.477 10-10 0-.402-.024-.8-.07-1.19l-1.986.235A8 8 0 0112 20H6.828l.93-.929-1.415-1.414A7.967 7.967 0 014 12a8 8 0 0110-7.748l.498-1.937C13.698 2.109 12.861 2 12 2zM9 9H7v6h2V9zm8 0h-2v6h2V9zm-4-3h-2v12h2V6z" />
    </Svg>
  );
}

export default SvgChatVoiceAiLine;
