import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFileImageFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M21 7l-5-5H3.993A.993.993 0 003 2.992v18.016a1 1 0 00.993.992h16.014a.993.993 0 00.993-.992V7zM11 9.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm6.5 7.5H8l5.5-7 4 7z" />
    </Svg>
  );
}

export default SvgFileImageFill;
