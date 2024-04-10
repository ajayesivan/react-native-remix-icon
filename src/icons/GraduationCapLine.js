import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgGraduationCapLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M4 11.333L0 9l12-7 12 7v8.5h-2v-7.333l-2 1.166v6.678l-.223.275A9.983 9.983 0 0112 22a9.983 9.983 0 01-7.777-3.714L4 18.011v-6.678zM6 12.5v4.792A7.979 7.979 0 0012 20a7.978 7.978 0 006-2.708V12.5L12 16l-6-3.5zM3.97 9L12 13.685 20.03 9 12 4.315 3.97 9z" />
    </Svg>
  );
}

export default SvgGraduationCapLine;
