import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgChatVoiceAiFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M20.713 8.128l-.246.566a.506.506 0 01-.934 0l-.246-.566a4.363 4.363 0 00-2.22-2.25l-.759-.339a.53.53 0 010-.963l.717-.319a4.366 4.366 0 002.251-2.326l.253-.611a.506.506 0 01.942 0l.253.61a4.366 4.366 0 002.25 2.327l.718.32a.53.53 0 010 .962l-.76.338a4.363 4.363 0 00-2.219 2.251zM22 12c0-.445-.029-.883-.085-1.312A5.994 5.994 0 0120 11a5.972 5.972 0 01-3-.803V15h-2V9h.528A5.978 5.978 0 0114 5c0-.953.222-1.854.617-2.654A10.013 10.013 0 0012 2C6.477 2 2 6.477 2 12a9.969 9.969 0 002.929 7.071L2 22h10c5.523 0 10-4.477 10-10zM11 6h2v12h-2V6zm-4 9V9h2v6H7z" />
    </Svg>
  );
}

export default SvgChatVoiceAiFill;
