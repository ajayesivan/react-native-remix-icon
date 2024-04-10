import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgListView(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M2 4a1 1 0 011-1h18a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4zm2 1v14h16V5H4zm2 2h2v2H6V7zm2 4H6v2h2v-2zm-2 4h2v2H6v-2zm12-8h-8v2h8V7zm-8 8h8v2h-8v-2zm8-4h-8v2h8v-2z" />
    </Svg>
  );
}

export default SvgListView;
