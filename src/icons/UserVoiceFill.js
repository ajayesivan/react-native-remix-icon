import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgUserVoiceFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M1 22a8 8 0 1116 0H1zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm9.246-9.815A9.97 9.97 0 0119 7a9.97 9.97 0 01-.754 3.816l-1.677-1.22A7.99 7.99 0 0017 7a7.99 7.99 0 00-.43-2.596l1.676-1.22zM21.548.784A13.942 13.942 0 0123 7c0 2.233-.523 4.344-1.452 6.216l-1.645-1.196A11.955 11.955 0 0021 7c0-1.792-.393-3.493-1.097-5.02L21.548.784z" />
    </Svg>
  );
}

export default SvgUserVoiceFill;
