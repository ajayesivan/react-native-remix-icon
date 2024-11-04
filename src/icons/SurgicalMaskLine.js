import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSurgicalMaskLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12.485 3.121l7.758 1.94a1 1 0 01.757.97V7h1c1.1 0 2 .9 2 2v3a3 3 0 01-3 3h-.421a5.999 5.999 0 01-2.896 3.158l-4.789 2.395a2 2 0 01-1.788 0l-4.79-2.395A5.999 5.999 0 013.422 15H3a3 3 0 01-3-3V9a2 2 0 012-2h1v-.97a1 1 0 01.757-.97l7.758-1.939a2 2 0 01.97 0zM12 5.061l-7 1.75v5.98a4 4 0 002.211 3.578L12 18.764l4.789-2.395A4 4 0 0019 12.792v-5.98l-7-1.75zM3 9H2v3a1 1 0 001 1V9zm19 0h-1v4a1 1 0 001-1V9z" />
    </Svg>
  );
}

export default SvgSurgicalMaskLine;
