import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgKakaoTalkLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M5.679 18.123C3.093 16.566 1.5 14.112 1.5 11.405 1.501 6.701 6.249 3 12.001 3s10.5 3.701 10.5 8.405c0 4.704-4.748 8.405-10.5 8.405-.442 0-.881-.022-1.318-.065l-3.765 2.458c-.615.326-.957.425-1.485.066-.62-.424-.596-.892-.382-1.56l.628-2.586zM3.5 11.405c0 2.132 1.418 4.123 3.781 5.32l.706.359-.186.77-.401 1.648 2.8-1.83.365.046c.474.061.953.092 1.435.092 4.741 0 8.5-2.93 8.5-6.405S16.742 5 12.001 5s-8.5 2.93-8.5 6.405zm14.407-.346l1.514 2.155a.472.472 0 11-.773.543l-1.428-2.033-.427.413V13.5a.472.472 0 11-.944 0v-1.439a.472.472 0 010-.222V9.282a.472.472 0 01.944 0v1.542l1.928-1.866a.472.472 0 01.656.678l-1.47 1.423zm-2.958 1.925a.472.472 0 110 .944h-1.932a.472.472 0 01-.471-.472V9.297a.472.472 0 11.943 0v3.687h1.46zm-5.857-1.091h1.334l-.638-1.708-.696 1.707zm2.523.487l.345.925a.472.472 0 11-.884.33l-.298-.799h-2.07l-.332.813a.472.472 0 11-.874-.357l1.662-4.075a.696.696 0 01.653-.447.69.69 0 01.627.474l1.046 2.8a.469.469 0 01.127.32l-.002.016zM8.294 9.302c0 .26-.21.472-.471.472h-1.14v3.736a.472.472 0 01-.945 0V9.774h-1.16a.472.472 0 110-.944h3.245c.26 0 .471.211.471.472z" />
    </Svg>
  );
}

export default SvgKakaoTalkLine;
