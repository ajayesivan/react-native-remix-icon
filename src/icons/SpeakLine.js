import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSpeakLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M16.934 8.965A8.002 8.002 0 001 10c0 1.892.657 3.631 1.756 5.001C3.564 16.01 4 17.125 4 18.306V22h9l.001-3H15a2 2 0 002-2v-2.929l1.96-.84c.342-.146.372-.494.224-.727l-2.25-3.54zM3 10a6 6 0 0111.95-.779l.057.442 1.543 2.425-1.55.664V17h-3.998L11 20H6v-1.694c0-1.639-.591-3.192-1.685-4.556A5.966 5.966 0 013 10zm18.154 8.102l-1.665-1.11A8.959 8.959 0 0021 12a8.958 8.958 0 00-1.51-4.993l1.664-1.11A10.948 10.948 0 0123 12c0 2.258-.68 4.356-1.846 6.102z" />
    </Svg>
  );
}

export default SvgSpeakLine;
