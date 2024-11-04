import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgInformationOffFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M19.743 18.329A9.958 9.958 0 0022 12c0-5.523-4.477-10-10-10a9.959 9.959 0 00-6.329 2.257l6.243 6.243H13v1.086l6.743 6.743zM10 11.414L4.257 5.671A9.959 9.959 0 002 12c0 5.523 4.477 10 10 10a9.958 9.958 0 006.329-2.257L14 15.414V17h-4v-2h1v-2.5h-1v-1.086zM13.586 15H13v-.586l.586.586zM13.5 8a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    </Svg>
  );
}

export default SvgInformationOffFill;
