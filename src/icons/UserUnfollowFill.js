import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgUserUnfollowFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M14 14.252V22H4a8 8 0 0110-7.748zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm7 3.586l2.121-2.121 1.415 1.414L20.413 18l2.121 2.121-1.414 1.415L19 19.413l-2.121 2.121-1.415-1.414L17.587 18l-2.121-2.121 1.414-1.415L19 16.587z" />
    </Svg>
  );
}

export default SvgUserUnfollowFill;