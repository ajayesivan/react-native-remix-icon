import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPlayList2Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M22 18v2H2v-2h20zM2 3.5l8 5-8 5v-10zM22 11v2H12v-2h10zM4 7.109v2.783L6.226 8.5 4 7.109zM22 4v2H12V4h10z" />
    </Svg>
  );
}

export default SvgPlayList2Line;
