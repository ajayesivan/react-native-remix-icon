import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgInformationOffLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12zm14.906 6.32A8 8 0 015.68 7.094L10 11.414V12.5h1V15h-1v2h4v-1.586l2.906 2.906zm1.414-1.414L13 11.586V10.5h-1.086l-4.82-4.82A8 8 0 0118.32 16.905zM13 14.414V15h.586L13 14.414zM12 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
    </Svg>
  );
}

export default SvgInformationOffLine;
