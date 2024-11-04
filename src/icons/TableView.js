import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgTableView(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M3 3a1 1 0 00-1 1v16a1 1 0 001 1h18a1 1 0 001-1V4a1 1 0 00-1-1H3zm5 2v3H4V5h4zm-4 9v-4h4v4H4zm0 2h4v3H4v-3zm6 0h10v3H10v-3zm10-2H10v-4h10v4zm0-9v3H10V5h10z" />
    </Svg>
  );
}

export default SvgTableView;
