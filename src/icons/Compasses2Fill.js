import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCompasses2Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M16.33 13.497a6.988 6.988 0 002.67-5.5h2a8.987 8.987 0 01-3.662 7.246l2.528 4.378a2 2 0 01-.732 2.732l-3.527-6.108a8.971 8.971 0 01-3.607.752 8.97 8.97 0 01-3.607-.752l-3.527 6.108a2 2 0 01-.732-2.732l5.064-8.77A4.002 4.002 0 0111 4.123V1.997h2v2.126a4.002 4.002 0 011.803 6.728l1.527 2.646zM14.6 14.498l-1.528-2.646a4.003 4.003 0 01-2.142 0l-1.528 2.646c.804.322 1.68.499 2.599.499a6.98 6.98 0 002.599-.499zM12 8.997a1 1 0 100-2 1 1 0 000 2z" />
    </Svg>
  );
}

export default SvgCompasses2Fill;
