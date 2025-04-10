import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgStackLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="m20.083 15.2 1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05zm0-4.7 1.202.721a.5.5 0 0 1 0 .858L12 17.649l-9.285-5.57a.5.5 0 0 1 0-.858l1.202-.721L12 15.35zm-7.569-9.191 8.771 5.262a.5.5 0 0 1 0 .858L12 12.999 2.715 7.43a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0M12 3.332 5.887 7 12 10.668 18.113 7z" />
  </Svg>
);
export default SvgStackLine;
