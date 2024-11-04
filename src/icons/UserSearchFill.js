import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgUserSearchFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 14v8H4a8 8 0 018-8zm0-1c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm9.446 7.032l1.504 1.503-1.415 1.415-1.503-1.504a4 4 0 111.414-1.414zM18 20a2 2 0 100-4 2 2 0 000 4z" />
    </Svg>
  );
}

export default SvgUserSearchFill;
