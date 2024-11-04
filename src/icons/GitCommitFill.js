import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgGitCommitFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M15.874 13a4.002 4.002 0 01-7.748 0H3v-2h5.126a4.002 4.002 0 017.748 0H21v2h-5.126z" />
    </Svg>
  );
}

export default SvgGitCommitFill;
