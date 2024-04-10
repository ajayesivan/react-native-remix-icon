import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgStickyNoteAddLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M4 1v3H1v2h3v3h2V6h3V4H6V1H4zM3 20.007V11h2v8h8v-5c0-.55.45-1 1-1l5-.001V5h-8V3h9.007c.548 0 .993.456.993 1.002V15l-6 5.996L4.002 21A.998.998 0 013 20.007zm15.171-5.008L15 15v3.169l3.171-3.17z" />
    </Svg>
  );
}

export default SvgStickyNoteAddLine;
