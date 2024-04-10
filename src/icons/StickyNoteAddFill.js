import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgStickyNoteAddFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M4 1v3H1v2h3v3h2V6h3V4H6V1H4zm7 4a6 6 0 01-8 5.659v9.348c0 .548.447.993.998.993H14v-6c0-.55.45-1 1-1h6V3.998A.996.996 0 0020.007 3h-9.348A5.99 5.99 0 0111 5zm10 11l-5 4.997V16h5z" />
    </Svg>
  );
}

export default SvgStickyNoteAddFill;
