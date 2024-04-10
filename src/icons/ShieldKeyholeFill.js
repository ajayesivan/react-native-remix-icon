import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgShieldKeyholeFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 1l8.217 1.826a1 1 0 01.783.976v9.987a6 6 0 01-2.672 4.992L12 23l-6.328-4.219A6 6 0 013 13.79V3.802a1 1 0 01.783-.976L12 1zm0 6a2 2 0 00-1 3.732V15h2l.001-4.268A2 2 0 0012 7z" />
    </Svg>
  );
}

export default SvgShieldKeyholeFill;
