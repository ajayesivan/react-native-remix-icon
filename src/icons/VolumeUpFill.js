import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgVolumeUpFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M2 16h3.889l5.294 4.332a.5.5 0 00.817-.387V4.055a.5.5 0 00-.817-.387L5.89 8H2a1 1 0 00-1 1v6a1 1 0 001 1zm21-4c0 3.292-1.446 6.246-3.738 8.262l-1.418-1.418A8.98 8.98 0 0021 12a8.98 8.98 0 00-3.155-6.844l1.417-1.418A10.974 10.974 0 0123 12zm-5 0a5.99 5.99 0 00-2.287-4.713l-1.429 1.429A3.996 3.996 0 0116 12c0 1.36-.679 2.561-1.716 3.284l1.43 1.43A5.99 5.99 0 0018 12z" />
    </Svg>
  );
}

export default SvgVolumeUpFill;
