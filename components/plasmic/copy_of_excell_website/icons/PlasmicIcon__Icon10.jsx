/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon10Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M21 6.5c0 1.93-1.57 3.5-3.5 3.5S14 8.43 14 6.5 15.57 3 17.5 3 21 4.57 21 6.5M11.5 22c1.11 0 2-.89 2-2h-4a2 2 0 002 2M18 12h-.5c-.5 0-1-.08-1.5-.21V17H7v-6.5C7 8 9 6 11.5 6c.18 0 .35.03.5.05.1-.99.45-1.91 1-2.68C12.92 2.6 12.28 2 11.5 2c-.83 0-1.5.67-1.5 1.5v.68c-2.87.68-5 3.25-5 6.32V16l-2 2v1h17v-1l-2-2v-4z"
        }
      ></path>
    </svg>
  );
}

export default Icon10Icon;
/* prettier-ignore-end */
