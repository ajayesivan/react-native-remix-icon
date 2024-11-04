import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPrinterCloudLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M17 2a1 1 0 011 1v4h3a1 1 0 011 1v5.324a5.925 5.925 0 00-.61-.713A5.595 5.595 0 0020 11.583V9H4v8h2v-1a1 1 0 011-1h5.194a5.305 5.305 0 00-.07.283A4.945 4.945 0 0010.562 17H8.001v3h2.054a4.48 4.48 0 00.817 2H7a1 1 0 01-1-1v-2H3a1 1 0 01-1-1V8a1 1 0 011-1h3V3a1 1 0 011-1h10zm-1 2H8v3h8V4zm-8 6v2H5v-2h3zm13 6.5a3.5 3.5 0 10-7 0l.003.102a2.751 2.751 0 00.58 5.393l.167.005h5.5l.168-.005a2.75 2.75 0 00.58-5.392L21 16.5zm-4.993-.145a1.5 1.5 0 012.986 0L19 16.5v1.62c.696.199 1.177.334 1.444.406A.75.75 0 0120.255 20h-5.51a.75.75 0 01-.19-1.474c.238-.064.645-.178 1.22-.342L16 18.12V16.5l.007-.145z" />
    </Svg>
  );
}

export default SvgPrinterCloudLine;
