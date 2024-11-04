import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFileSettingsLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M8.595 12.812a3.51 3.51 0 010-1.623l-.992-.573 1-1.732.992.573A3.496 3.496 0 0111 8.645V7.5h2v1.145c.532.158 1.012.44 1.405.812l.992-.573 1 1.732-.992.572a3.507 3.507 0 010 1.623l.992.573-1 1.732-.992-.573a3.495 3.495 0 01-1.405.812V16.5h-2v-1.145a3.495 3.495 0 01-1.405-.812l-.992.573-1-1.732.992-.572zM12 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM15 4H5v16h14V8h-4V4zM3 2.992C3 2.444 3.447 2 3.998 2H16l5 5v13.992A1 1 0 0120.007 22H3.993A1 1 0 013 21.008V2.992z" />
    </Svg>
  );
}

export default SvgFileSettingsLine;
