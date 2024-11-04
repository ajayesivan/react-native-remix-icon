import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgHandHeartFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M9.335 11.502h2.17a4.5 4.5 0 014.5 4.5H9.004v1h8v-1a5.578 5.578 0 00-.885-3h2.886a5 5 0 014.516 2.852c-2.365 3.12-6.194 5.149-10.516 5.149-2.761 0-5.1-.59-7-1.625v-9.304a6.967 6.967 0 013.33 1.428zm-5.33-2.5a1 1 0 01.993.884l.007.116v9a1 1 0 01-1 1h-2a1 1 0 01-1-1v-9a1 1 0 011-1h2zm9.646-5.424l.354.354.353-.354a2.5 2.5 0 013.536 3.536l-3.89 3.889-3.888-3.89a2.5 2.5 0 113.535-3.535z" />
    </Svg>
  );
}

export default SvgHandHeartFill;
