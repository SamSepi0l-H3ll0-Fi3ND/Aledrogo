import React from "react";
import ContentLoader from "react-content-loader";

const ProductSkeleton = props => (
  <ContentLoader 
    speed={2}
    width={382}
    height={312}
    viewBox="0 0 382 312"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="4" y="139" rx="3" ry="3" width="88" height="8" /> 
    <rect x="4" y="164" rx="3" ry="3" width="52" height="8" /> 
    <rect x="4" y="10" rx="0" ry="0" width="115" height="115" /> 
    <rect x="4" y="192" rx="0" ry="0" width="120" height="33" /> 
    <rect x="135" y="192" rx="0" ry="0" width="120" height="33" /> 
    <rect x="4" y="239" rx="0" ry="0" width="120" height="33" />
  </ContentLoader>
)

export default ProductSkeleton;

