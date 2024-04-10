import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgHandCoinFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M9.335 11.502h2.17a4.5 4.5 0 014.5 4.5H9.004v1h8v-1a5.578 5.578 0 00-.885-3h2.886a5 5 0 014.516 2.852c-2.365 3.12-6.194 5.149-10.516 5.149-2.761 0-5.1-.59-7-1.625v-9.304a6.968 6.968 0 013.33 1.428zm-4.33 7.5a1 1 0 01-1 1h-2a1 1 0 01-1-1v-9a1 1 0 011-1h2a1 1 0 011 1v9zm13-14a3 3 0 110 6 3 3 0 010-6zm-7-3a3 3 0 110 6 3 3 0 010-6z" />
    </Svg>
  );
}

export default SvgHandCoinFill;
