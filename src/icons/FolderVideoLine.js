import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFolderVideoLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M4 19V5h5.586l2 2H20v12H4zM21 5h-8.586l-2-2H3a1 1 0 00-1 1v16a1 1 0 001 1h18a1 1 0 001-1V6a1 1 0 00-1-1zm-6 7.667l-4.878-3.253a.4.4 0 00-.622.333v6.505a.4.4 0 00.622.333L15 13.333a.401.401 0 000-.666z" />
    </Svg>
  );
}

export default SvgFolderVideoLine;
