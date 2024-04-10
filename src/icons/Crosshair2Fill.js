import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCrosshair2Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M11 5.07A7.005 7.005 0 005.07 11H7v2H5.07A7.004 7.004 0 0011 18.93V17h2v1.93A7.004 7.004 0 0018.93 13H17v-2h1.93A7.004 7.004 0 0013 5.07V7h-2V5.07zM3.055 11A9.004 9.004 0 0111 3.055V1h2v2.055A9.004 9.004 0 0120.945 11H23v2h-2.055A9.004 9.004 0 0113 20.945V23h-2v-2.055A9.004 9.004 0 013.055 13H1v-2h2.055zM15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </Svg>
  );
}

export default SvgCrosshair2Fill;
