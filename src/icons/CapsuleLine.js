import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCapsuleLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M19.779 4.222a6 6 0 010 8.485l-7.072 7.071a6 6 0 01-8.485-8.485l7.071-7.071a6 6 0 018.486 0zm-5.657 11.313L8.466 9.878l-2.83 2.83a4 4 0 005.657 5.656l2.83-2.83zm4.242-9.899a4 4 0 00-5.657 0L9.88 8.464l5.657 5.657 2.827-2.828a4 4 0 000-5.657z" />
    </Svg>
  );
}

export default SvgCapsuleLine;
