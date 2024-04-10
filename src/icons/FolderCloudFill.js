import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFolderCloudFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M2 4a1 1 0 011-1h7.414l2 2H21a1 1 0 011 1v6.36c-.998-1.42-2.646-2.36-4.5-2.36-2.602 0-4.799 1.853-5.36 4.282A4.743 4.743 0 0010 18.25c0 1.025.325 1.974.877 2.75H3a1 1 0 01-1-1V4zm12.002 11.603A2.751 2.751 0 0014.75 21h5.5a2.75 2.75 0 00.748-5.397C21.055 13.658 19.448 12 17.5 12c-1.948 0-3.555 1.658-3.498 3.603z" />
    </Svg>
  );
}

export default SvgFolderCloudFill;
