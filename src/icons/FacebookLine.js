import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFacebookLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M13 9h4.5l-.5 2h-4v9h-2v-9H7V9h4V7.128c0-1.783.186-2.43.534-3.082a3.635 3.635 0 011.512-1.512C13.698 2.186 14.345 2 16.128 2c.522 0 .98.05 1.372.15V4h-1.372c-1.324 0-1.727.078-2.139.298-.303.162-.529.388-.691.692-.22.411-.298.814-.298 2.138V9z" />
    </Svg>
  );
}

export default SvgFacebookLine;
