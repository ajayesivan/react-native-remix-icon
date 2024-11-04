import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgGitMergeLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M7.105 8.79A3.001 3.001 0 0010 11h4a5.002 5.002 0 014.927 4.146A3.001 3.001 0 0118 21a3 3 0 01-1.105-5.79A3.001 3.001 0 0014 13h-4a4.978 4.978 0 01-3-1v3.17a3.001 3.001 0 11-2 0V8.83a3.001 3.001 0 112.105-.04zM6 7a1 1 0 100-2 1 1 0 000 2zm0 12a1 1 0 100-2 1 1 0 000 2zm12 0a1 1 0 100-2 1 1 0 000 2z" />
    </Svg>
  );
}

export default SvgGitMergeLine;
