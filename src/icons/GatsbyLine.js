import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgGatsbyLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M11.752 21.997c-5.221-.128-9.45-4.257-9.736-9.438l-.012-.313 9.748 9.751zM12 2a9.988 9.988 0 018.193 4.265l-1.638 1.148A8.003 8.003 0 004.535 9.12L14.88 19.466A8.018 8.018 0 0019.749 14H15.5v-2H22c0 4.726-3.279 8.686-7.686 9.73L2.27 9.686C3.314 5.28 7.275 2 12 2z" />
    </Svg>
  );
}

export default SvgGatsbyLine;
