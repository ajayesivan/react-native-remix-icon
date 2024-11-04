import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPriceTag3Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M10.904 2.1l9.9 1.414 1.414 9.9-9.193 9.192a1 1 0 01-1.414 0l-9.9-9.9a1 1 0 010-1.413L10.905 2.1zm.707 2.122L3.833 12l8.485 8.485 7.779-7.778-1.061-7.425-7.425-1.06zm2.122 6.363a2 2 0 112.828-2.828 2 2 0 01-2.828 2.829z" />
    </Svg>
  );
}

export default SvgPriceTag3Line;
