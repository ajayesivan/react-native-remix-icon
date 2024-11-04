import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBearSmileLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 17a4 4 0 004-4h-2a2 2 0 11-4 0H8a4 4 0 004 4zM6.5 2a4.5 4.5 0 00-2.95 7.898 9 9 0 1016.901 0 4.5 4.5 0 10-6.79-5.745 9.044 9.044 0 00-3.321 0A4.496 4.496 0 006.5 2zM4 6.5a2.5 2.5 0 014.852-.851l.318.878.898-.257A7.004 7.004 0 0112 6c.672 0 1.32.094 1.932.27l.898.257.318-.878a2.501 2.501 0 113.58 3.03l-.814.46.404.842a7 7 0 11-12.635 0l.403-.843-.814-.46A2.499 2.499 0 014 6.5z" />
    </Svg>
  );
}

export default SvgBearSmileLine;
