import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LgPlus = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" baseProfile="basic" viewBox="0 0 24 24" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<linearGradient id="a" x1={4.929} x2={19.071} y1={4.929} y2={19.071} gradientUnits="userSpaceOnUse"><stop offset={0} style={{
      stopColor: "#fff",
      stopOpacity: 0.6
    }} /><stop offset={1} style={{
      stopColor: "#fff",
      stopOpacity: 0.3
    }} /></linearGradient><circle cx={12} cy={12} r={10} style={{
    fill: "url(#a)"
  }} /><linearGradient id="b" x1={4.929} x2={19.071} y1={4.929} y2={19.071} gradientUnits="userSpaceOnUse"><stop offset={0} style={{
      stopColor: "#fff",
      stopOpacity: 0.6
    }} /><stop offset={0.493} style={{
      stopColor: "#fff",
      stopOpacity: 0
    }} /><stop offset={0.997} style={{
      stopColor: "#fff",
      stopOpacity: 0.3
    }} /></linearGradient><path d="M12 2.5c5.238 0 9.5 4.262 9.5 9.5s-4.262 9.5-9.5 9.5-9.5-4.262-9.5-9.5S6.762 2.5 12 2.5m0-.5C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2" style={{
    fill: "url(#b)"
  }} /><linearGradient id="c" x1={8.793} x2={15.207} y1={8.793} y2={15.207} gradientUnits="userSpaceOnUse"><stop offset={0} style={{
      stopColor: "#fff",
      stopOpacity: 0.7
    }} /><stop offset={0.519} style={{
      stopColor: "#fff",
      stopOpacity: 0.45
    }} /><stop offset={1} style={{
      stopColor: "#fff",
      stopOpacity: 0.55
    }} /></linearGradient><path d="M17 11h-4V7a1 1 0 0 0-2 0v4H7a1 1 0 0 0 0 2h4v4a1 1 0 0 0 2 0v-4h4a1 1 0 0 0 0-2" style={{
    fill: "url(#c)"
  }} /></svg>;
const ForwardRef = forwardRef(LgPlus);
export default ForwardRef;