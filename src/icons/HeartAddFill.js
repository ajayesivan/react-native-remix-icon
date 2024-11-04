import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgHeartAddFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M19 14v3h3v2h-3v3h-2v-3h-3v-2h3v-3h2zm1.243-9.243a6 6 0 01.507 7.91 6 6 0 00-8.06 8.127l-.69.691-8.479-8.492a6 6 0 018.48-8.464 5.998 5.998 0 018.242.228z" />
    </Svg>
  );
}

export default SvgHeartAddFill;
