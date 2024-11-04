import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgGitPrDraftLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M5 6a1 1 0 112 0 1 1 0 01-2 0zm1-3a3 3 0 00-1 5.83v6.34a3.001 3.001 0 102 0V8.83A3.001 3.001 0 006 3zM5 18a1 1 0 112 0 1 1 0 01-2 0zm13-1a1 1 0 100 2 1 1 0 000-2zm-3 1a3 3 0 116 0 3 3 0 01-6 0zm3-10.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm1.5 4a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    </Svg>
  );
}

export default SvgGitPrDraftLine;
