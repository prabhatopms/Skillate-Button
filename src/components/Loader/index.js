import React from 'react';
import * as loaderStyle from './loader.js';

import { css } from 'emotion';

export function LargeLoader() {
  return (
    <div
      className={css`
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
        margin: auto;
      `}
    >
      <div className={loaderStyle.ldsRing}>
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}

export function MiniLoader({ color }) {
  return (
    <div
      className={
        color === 'white'
          ? loaderStyle.ldsRingMiniWhite
          : loaderStyle.ldsRingMiniGrey
      }
    >
      <div />
      <div />
      <div />
      <div />
    </div>
  );
}

export function NormalLoader() {
  return (
    <div className={loaderStyle.ldsRingNormal}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
}

const Loader = () => <div className="loader-div" />;
export default Loader;
