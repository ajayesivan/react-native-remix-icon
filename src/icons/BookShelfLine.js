import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBookShelfLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M4 3a1 1 0 00-1 1v16a1 1 0 001 1h10a1 1 0 001-1v-4.703L16 20a1 1 0 001.186.77l3.912-.832a1 1 0 00.77-1.186l-2.91-13.694a1 1 0 00-1.186-.77l-2.78.59A1 1 0 0014 4h-4a1 1 0 00-1-1H4zm6 3h3v8h-3V6zm0 13v-3h3v3h-3zM8 5v10H5V5h3zm0 12v2H5v-2h3zm9.332-.35l1.956-.416.416 1.956-1.956.416-.416-1.956zm-.416-1.957l-1.663-7.825 1.956-.416 1.664 7.825-1.957.416z" />
    </Svg>
  );
}

export default SvgBookShelfLine;
