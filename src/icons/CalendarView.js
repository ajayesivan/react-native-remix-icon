import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCalendarView(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M2 4a1 1 0 011-1h18a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4zm2 15h16V9H4v10zm7-6H6v4h5v-4z" />
    </Svg>
  );
}

export default SvgCalendarView;
