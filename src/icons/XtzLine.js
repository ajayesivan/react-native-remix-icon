import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgXtzLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M9 6V2H7v4H4.5v2H7v5a4 4 0 006.667 2.981l-1.334-1.49A2 2 0 019 13V8h6.625L11.5 11.975V13.5h1c3.067 0 5 2.18 5 4 0 1.883-1.627 3.5-3.75 3.5-1.823 0-3.293-1.202-3.66-2.733l-1.945.466C8.74 21.21 11.051 23 13.75 23c3.124 0 5.75-2.412 5.75-5.5 0-2.565-2.034-4.932-4.914-5.722L19 7.525V6H9z" />
    </Svg>
  );
}

export default SvgXtzLine;
