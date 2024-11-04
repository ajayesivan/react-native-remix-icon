import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgEmojiStickerLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M10.52 19.863a9.948 9.948 0 01.826-3.395 6.977 6.977 0 01-4.013-1.753l1.334-1.49a4.977 4.977 0 003.854 1.246 9.987 9.987 0 017.342-3.951 8 8 0 10-9.343 9.343zm8.503-7.227a8.008 8.008 0 00-6.387 6.387l6.387-6.387zM22 12c0 .168-.004.334-.012.5L12.5 21.988A10.11 10.11 0 0112 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10zm-12-2a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm7 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    </Svg>
  );
}

export default SvgEmojiStickerLine;
