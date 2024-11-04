import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMailCloseLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M22 14h-2V7.238l-7.928 7.1L4 7.216V19h11v2H3a1 1 0 01-1-1V4a1 1 0 011-1h18a1 1 0 011 1v10zM4.511 5l7.55 6.662L19.502 5H4.511zm16.903 14l2.121 2.121-1.414 1.415L20 20.413l-2.121 2.121-1.415-1.414L18.587 19l-2.121-2.121 1.414-1.415L20 17.587l2.121-2.121 1.415 1.414L21.413 19z" />
    </Svg>
  );
}

export default SvgMailCloseLine;
