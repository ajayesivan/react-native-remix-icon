import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgStarHalfSLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 14.656l2.816 1.72-.765-3.21 2.506-2.147-3.29-.264L12 7.708v6.948zM12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.865.55-5.23 4.48 1.598 6.7L12 17z" />
    </Svg>
  );
}

export default SvgStarHalfSLine;
