import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgStarSFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.865.55-5.23 4.48 1.598 6.7L12 17z" />
    </Svg>
  );
}

export default SvgStarSFill;
