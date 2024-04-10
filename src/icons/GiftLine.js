import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgGiftLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M15.005 2.003a4 4 0 013.464 6h4.536v2h-2v10a1 1 0 01-1 1h-16a1 1 0 01-1-1v-10h-2v-2H5.54a4 4 0 016.465-4.646 3.983 3.983 0 012.999-1.354zm-4 8h-6v9h6v-9zm8 0h-6v9h6v-9zm-10-6a2 2 0 00-.15 3.994l.15.006h2v-2a2 2 0 00-1.697-1.977l-.154-.018-.15-.005zm6 0a2 2 0 00-1.995 1.85l-.005.15v2h2a2 2 0 001.994-1.85l.006-.15a2 2 0 00-2-2z" />
    </Svg>
  );
}

export default SvgGiftLine;
