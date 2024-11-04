import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgGalleryUploadLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M8 1v4H4v14h16V3h1.008c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3H6V1zm4 7 4 4h-3v4h-2v-4H8zm6-7v4h-8V3h6V1z" />
  </Svg>
);
export default SvgGalleryUploadLine;
