import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFolderOpenLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M3 21a1 1 0 01-1-1V4a1 1 0 011-1h7.414l2 2H20a1 1 0 011 1v3h-2V7h-7.414l-2-2H4v11.998L5.5 11h17l-2.31 9.242a1 1 0 01-.97.758H3zm16.938-8H7.062l-1.5 6h12.876l1.5-6z" />
    </Svg>
  );
}

export default SvgFolderOpenLine;
