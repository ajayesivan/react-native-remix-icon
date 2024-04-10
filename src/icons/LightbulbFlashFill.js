import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLightbulbFlashFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M7.941 18c-.297-1.273-1.637-2.314-2.187-3a8 8 0 1112.49.002c-.55.685-1.888 1.726-2.185 2.998H7.941zM16 20v1a2 2 0 01-2 2h-4a2 2 0 01-2-2v-1h8zm-3-9.995V6l-4.5 6.005H11v4l4.5-6H13z" />
    </Svg>
  );
}

export default SvgLightbulbFlashFill;
