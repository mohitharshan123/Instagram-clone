import * as React from "react";
import Svg, { Circle } from "react-native-svg";
const HorizontalInfo: React.FC<any> = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Circle cx={6.5} cy={11.5} r={1.5} fill="#fff" />
    <Circle cx={12} cy={11.5} r={1.5} fill="#fff" />
    <Circle cx={17.5} cy={11.5} r={1.5} fill="#fff" />
  </Svg>
);
export default HorizontalInfo;
