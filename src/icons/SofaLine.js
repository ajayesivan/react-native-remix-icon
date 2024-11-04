import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSofaLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M9 3a6 6 0 00-6 6v.351c-1.52.746-2.367 2.565-1.733 4.307l.312.86a7 7 0 01.422 2.391V19.5A1.5 1.5 0 003.5 21h17a1.5 1.5 0 001.5-1.5v-2.59a7 7 0 01.421-2.393l.313-.86c.633-1.741-.213-3.56-1.734-4.306V9a6 6 0 00-6-6H9zm10 6.032c-1.694.23-3 1.682-3 3.44V14H8v-1.528a3.472 3.472 0 00-3-3.44V9a4 4 0 014-4h6a4 4 0 014 4v.032zM16 16v1h2v-4.528a1.472 1.472 0 112.855.502l-.313.86a9 9 0 00-.541 3.075V19H4v-2.09a9 9 0 00-.542-3.076l-.313-.86a1.471 1.471 0 112.855-.502V17h2v-1h8z" />
    </Svg>
  );
}

export default SvgSofaLine;
