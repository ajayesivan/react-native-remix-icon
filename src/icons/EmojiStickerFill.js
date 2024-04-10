import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgEmojiStickerFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M21.902 10.598a9.986 9.986 0 00-9.381 3.873 4.977 4.977 0 01-3.854-1.246l-1.334 1.49a6.976 6.976 0 004.014 1.753A9.969 9.969 0 0010.5 20.5c0 .476.033.944.098 1.402C5.738 21.221 2 17.047 2 12 2 6.477 6.477 2 12 2c5.047 0 9.22 3.739 9.902 8.598zm-.031 2.019a7.99 7.99 0 00-7.964 3.35A7.958 7.958 0 0012.5 20.5c0 .467.04.925.117 1.37l9.254-9.253zM8.5 11.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
    </Svg>
  );
}

export default SvgEmojiStickerFill;
