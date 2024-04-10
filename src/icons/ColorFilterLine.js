import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgColorFilterLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 3a4 4 0 013.696 5.533 5.996 5.996 0 00-4.216 2.434A4.002 4.002 0 018 7a4 4 0 014-4zm5.764 5.672a6 6 0 10-11.527 0A6 6 0 1012 18.655a6 6 0 105.764-9.983zm-4.61 8.262a5.996 5.996 0 000-4.867 4.001 4.001 0 110 4.867zm-1.79-3.967a4.001 4.001 0 11-4.214-2.434 5.996 5.996 0 004.215 2.434z" />
    </Svg>
  );
}

export default SvgColorFilterLine;
