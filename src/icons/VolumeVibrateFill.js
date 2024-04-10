import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgVolumeVibrateFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M19.39 3.161l1.413 1.414-2.475 2.475 2.475 2.475L18.328 12l2.475 2.476-2.475 2.475 2.475 2.475-1.414 1.414-3.889-3.89 2.475-2.474L15.5 12l2.475-2.475L15.5 7.05l3.89-3.889zm-6.503.577a.5.5 0 01.113.317v15.89a.5.5 0 01-.817.387L6.89 15.999 3 16a1 1 0 01-1-1V9a1 1 0 011-1h3.889l5.294-4.332a.5.5 0 01.704.07z" />
    </Svg>
  );
}

export default SvgVolumeVibrateFill;
