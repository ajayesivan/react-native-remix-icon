import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSmartphoneFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M6 2h12a1 1 0 011 1v18a1 1 0 01-1 1H6a1 1 0 01-1-1V3a1 1 0 011-1zm6 15a1 1 0 100 2 1 1 0 000-2z" />
    </Svg>
  );
}

export default SvgSmartphoneFill;
