import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgDiscussLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M14 22.5L11.2 19H6a1 1 0 01-1-1V7.103a1 1 0 011-1h16a1 1 0 011 1V18a1 1 0 01-1 1h-5.2L14 22.5zm1.839-5.5H21V8.103H7V17H12.161L14 19.298 15.839 17zM2 2h17v2H3v11H1V3a1 1 0 011-1z" />
    </Svg>
  );
}

export default SvgDiscussLine;
