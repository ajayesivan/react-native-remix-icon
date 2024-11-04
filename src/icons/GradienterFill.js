import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgGradienterFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM8.126 11H4.062a8.079 8.079 0 000 2h4.064a4.007 4.007 0 010-2zm7.748 0a4.01 4.01 0 010 2h4.064a8.069 8.069 0 000-2h-4.064zM12 14a2 2 0 100-4 2 2 0 000 4z" />
    </Svg>
  );
}

export default SvgGradienterFill;
