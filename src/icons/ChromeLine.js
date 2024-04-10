import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgChromeLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M10.364 19.833l1.93-3.342a4.499 4.499 0 01-4.234-2.315L4.795 8.52a8.003 8.003 0 005.57 11.313zm2.226.146A8 8 0 0019.602 9.5h-3.86c.479.715.758 1.575.758 2.5 0 .848-.234 1.64-.642 2.318l-3.268 5.66zm1.553-6.691l.022-.038a2.5 2.5 0 10-4.354-.042l.024.042a2.499 2.499 0 004.308.037zm-8.108-6.62l1.928 3.34A4.5 4.5 0 0112 7.5h6.615A7.992 7.992 0 0012 4a7.98 7.98 0 00-5.965 2.669zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </Svg>
  );
}

export default SvgChromeLine;
