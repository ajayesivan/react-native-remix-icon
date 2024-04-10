import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMusicFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 13.535V3h8v3h-6v11a4 4 0 11-2-3.465z" />
    </Svg>
  );
}

export default SvgMusicFill;
