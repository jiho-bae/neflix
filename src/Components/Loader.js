import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 90vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  text-align: center;
`;

const Loading = styled.div`
  @keyframes avxxzdwe-hjscvz1d {
    0% {
      opacity: 1;
      backface-visibility: hidden;
      transform: translateZ(0) scale(1.23, 1.23);
    }
    100% {
      opacity: 0;
      backface-visibility: hidden;
      transform: translateZ(0) scale(1, 1);
    }
  }
  .avxxzdwe-hjscvz1d div > div {
    position: absolute;
    width: 28.979999999999997px;
    height: 28.979999999999997px;
    border-radius: 50%;
    background: #df1317;
    animation: avxxzdwe-hjscvz1d 0.9615384615384615s linear infinite;
  }
  .avxxzdwe-hjscvz1d div:nth-child(1) > div {
    left: 163.5px;
    top: 89.49999999999999px;
    animation-delay: -0.8741258741258741s;
  }
  .avxxzdwe-hjscvz1d > div:nth-child(1) {
    transform: rotate(0deg);
    transform-origin: 177.99px 103.99px;
  }
  .avxxzdwe-hjscvz1d div:nth-child(2) > div {
    left: 151.5px;
    top: 129.5px;
    animation-delay: -0.7867132867132867s;
  }
  .avxxzdwe-hjscvz1d > div:nth-child(2) {
    transform: rotate(32.72727272727273deg);
    transform-origin: 165.99px 143.99px;
  }
  .avxxzdwe-hjscvz1d div:nth-child(3) > div {
    left: 119.49999999999999px;
    top: 156.5px;
    animation-delay: -0.6993006993006993s;
  }
  .avxxzdwe-hjscvz1d > div:nth-child(3) {
    transform: rotate(65.45454545454545deg);
    transform-origin: 133.99px 170.99px;
  }
  .avxxzdwe-hjscvz1d div:nth-child(4) > div {
    left: 78.49999999999999px;
    top: 162.5px;
    animation-delay: -0.6118881118881119s;
  }
  .avxxzdwe-hjscvz1d > div:nth-child(4) {
    transform: rotate(98.18181818181819deg);
    transform-origin: 92.99px 176.99px;
  }
  .avxxzdwe-hjscvz1d div:nth-child(5) > div {
    left: 40.499999999999986px;
    top: 145.5px;
    animation-delay: -0.5244755244755244s;
  }
  .avxxzdwe-hjscvz1d > div:nth-child(5) {
    transform: rotate(130.9090909090909deg);
    transform-origin: 54.989999999999995px 159.99px;
  }
  .avxxzdwe-hjscvz1d div:nth-child(6) > div {
    left: 17.499999999999986px;
    top: 110.49999999999999px;
    animation-delay: -0.43706293706293703s;
  }
  .avxxzdwe-hjscvz1d > div:nth-child(6) {
    transform: rotate(163.63636363636363deg);
    transform-origin: 31.989999999999995px 124.99px;
  }
  .avxxzdwe-hjscvz1d div:nth-child(7) > div {
    left: 17.499999999999986px;
    top: 68.49999999999999px;
    animation-delay: -0.34965034965034963s;
  }
  .avxxzdwe-hjscvz1d > div:nth-child(7) {
    transform: rotate(196.36363636363637deg);
    transform-origin: 31.989999999999995px 82.99px;
  }
  .avxxzdwe-hjscvz1d div:nth-child(8) > div {
    left: 40.499999999999986px;
    top: 32.499999999999986px;
    animation-delay: -0.2622377622377622s;
  }
  .avxxzdwe-hjscvz1d > div:nth-child(8) {
    transform: rotate(229.0909090909091deg);
    transform-origin: 54.989999999999995px 46.989999999999995px;
  }
  .avxxzdwe-hjscvz1d div:nth-child(9) > div {
    left: 78.49999999999999px;
    top: 15.499999999999986px;
    animation-delay: -0.17482517482517482s;
  }
  .avxxzdwe-hjscvz1d > div:nth-child(9) {
    transform: rotate(261.8181818181818deg);
    transform-origin: 92.99px 29.989999999999995px;
  }
  .avxxzdwe-hjscvz1d div:nth-child(10) > div {
    left: 119.49999999999999px;
    top: 21.499999999999986px;
    animation-delay: -0.08741258741258741s;
  }
  .avxxzdwe-hjscvz1d > div:nth-child(10) {
    transform: rotate(294.54545454545456deg);
    transform-origin: 133.99px 35.989999999999995px;
  }
  .avxxzdwe-hjscvz1d div:nth-child(11) > div {
    left: 151.5px;
    top: 48.499999999999986px;
    animation-delay: 0s;
  }
  .avxxzdwe-hjscvz1d > div:nth-child(11) {
    transform: rotate(327.27272727272725deg);
    transform-origin: 165.99px 62.989999999999995px;
  }
  .loadingio-spinner-spin-ctyecxw45y8 {
    width: 207px;
    height: 207px;
    display: inline-block;
    overflow: hidden;
    background: rgba(NaN, NaN, NaN, 0);
  }
  .avxxzdwe-hjscvz1d {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0;
  }
  .avxxzdwe-hjscvz1d div {
    box-sizing: content-box;
  }
`;

export default () => (
  <Container>
    <span role="img" aria-label="loading">
      <Loading>
        <div className="loadingio-spinner-spin-ctyecxw45y8">
          <div className="avxxzdwe-hjscvz1d">
            <div>
              <div></div>
            </div>
            <div>
              <div></div>
            </div>
            <div>
              <div></div>
            </div>
            <div>
              <div></div>
            </div>
            <div>
              <div></div>
            </div>
            <div>
              <div></div>
            </div>
            <div>
              <div></div>
            </div>
            <div>
              <div></div>
            </div>
            <div>
              <div></div>
            </div>
            <div>
              <div></div>
            </div>
            <div>
              <div></div>
            </div>
          </div>
        </div>
      </Loading>
    </span>
  </Container>
);
