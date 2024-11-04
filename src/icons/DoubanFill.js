import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgDoubanFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M16.314 19.138h4.065a.62.62 0 01.621.62v.621a.62.62 0 01-.62.621H3.62a.62.62 0 01-.62-.62v-.621a.62.62 0 01.62-.621h3.754l-.96-3.104h2.19a.62.62 0 01.59.425l.892 2.679H13.6l1.225-4.035H5.172a.62.62 0 01-.62-.62V7.345a.62.62 0 01.62-.62h13.656a.62.62 0 01.62.62v7.138a.62.62 0 01-.62.62h-1.289l-1.225 4.035zM3.931 3h16.138a.62.62 0 01.62.62v.621a.62.62 0 01-.62.621H3.931a.62.62 0 01-.62-.62V3.62A.62.62 0 013.93 3zM7.19 8.586a.155.155 0 00-.156.155v4.035c0 .086.07.155.156.155h9.62c.086 0 .155-.07.155-.155V8.74a.155.155 0 00-.155-.155H7.19z" />
    </Svg>
  );
}

export default SvgDoubanFill;
