import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgTranslate2(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M18.5 10l4.4 11h-2.155l-1.201-3h-4.09l-1.199 3h-2.154L16.5 10h2zM10 2v2h6v2h-1.968a18.221 18.221 0 01-3.62 6.301 14.865 14.865 0 002.335 1.707l-.75 1.878A17.016 17.016 0 019 13.725a16.677 16.677 0 01-6.201 3.548l-.536-1.929a14.7 14.7 0 005.327-3.042A18.078 18.078 0 014.767 8h2.24A16.031 16.031 0 009 10.877a16.165 16.165 0 002.91-4.876L2 6V4h6V2h2zm7.5 10.885L16.253 16h2.492L17.5 12.885z" />
    </Svg>
  );
}

export default SvgTranslate2;
