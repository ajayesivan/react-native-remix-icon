import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgTyphoonLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="m17.654 1.7-2.782 2.533a9.1 9.1 0 0 1 3.49 1.973c3.512 3.2 3.512 8.388 0 11.588q-3.888 3.54-12.016 4.506l2.782-2.533a9.1 9.1 0 0 1-3.49-1.973c-3.512-3.2-3.533-8.369 0-11.588Q9.527 2.666 17.655 1.7M12 6c-3.866 0-7 2.686-7 6s3.134 6 7 6 7-2.686 7-6-3.134-6-7-6m0 2.3c2.21 0 4 1.657 4 3.7s-1.79 3.7-4 3.7-4-1.656-4-3.7c0-2.043 1.79-3.7 4-3.7m0 2c-1.138 0-2 .797-2 1.7s.862 1.7 2 1.7 2-.797 2-1.7-.862-1.7-2-1.7" />
  </Svg>
);
export default SvgTyphoonLine;
