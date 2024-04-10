import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSignalTowerLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M6.116 20.087l1.015-1.739a8 8 0 119.738 0l1.015 1.739A9.986 9.986 0 0022 12c0-5.523-4.477-10-10-10S2 6.477 2 12a9.986 9.986 0 004.116 8.087zm2.034-3.485a6 6 0 117.7 0l-1.03-1.766a4 4 0 10-5.64 0l-1.03 1.766zM11 13h2v9h-2v-9z" />
    </Svg>
  );
}

export default SvgSignalTowerLine;
