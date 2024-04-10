import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPhoneCameraFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M14.803 4A6 6 0 0023 12.197V19c0 .553-.44 1.001-1.003 1.001H2.002A1 1 0 011 19V5c0-.552.44-1 1.002-1h12.8zM20 11a4 4 0 110-8 4 4 0 010 8zm0-2a2 2 0 100-4 2 2 0 000 4zm-1 6v3h2v-3h-2z" />
    </Svg>
  );
}

export default SvgPhoneCameraFill;
