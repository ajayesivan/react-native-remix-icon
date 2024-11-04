import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCalendarCloseLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M9 3V1H7v2H3a1 1 0 00-1 1v16a1 1 0 001 1h18a1 1 0 001-1V4a1 1 0 00-1-1h-4V1h-2v2H9zm-5 7h16v9H4v-9zm0-5h3v1h2V5h6v1h2V5h3v3H4V5zm5.879 5.964L12 13.086l2.121-2.122 1.415 1.415-2.122 2.121 2.121 2.121-1.414 1.414L12 15.915l-2.121 2.12-1.415-1.414 2.122-2.12-2.122-2.122 1.415-1.415z" />
    </Svg>
  );
}

export default SvgCalendarCloseLine;
