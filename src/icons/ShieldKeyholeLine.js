import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgShieldKeyholeLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 1l8.217 1.826a1 1 0 01.783.976v9.987a6 6 0 01-2.672 4.992L12 23l-6.328-4.219A6 6 0 013 13.79V3.802a1 1 0 01.783-.976L12 1zm0 2.049L5 4.604v9.185a4 4 0 001.781 3.328L12 20.597l5.219-3.48A4 4 0 0019 13.79V4.604L12 3.05zM12 7a2 2 0 011.001 3.732L13 15h-2v-4.268A2 2 0 0112 7z" />
    </Svg>
  );
}

export default SvgShieldKeyholeLine;
