import { css, injectGlobal } from 'emotion';
import * as theme from '../../styles/theme.js';

export const ldsRing = css`
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;

  & div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 51px;
    height: 51px;
    margin: 4px;
    border: 2px solid ${theme.colors.defaultblue};
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${theme.colors.defaultblue} transparent transparent
      transparent;
  }

  & div:nth-child(1) {
    animation-delay: -0.45s;
  }

  & div:nth-child(2) {
    animation-delay: -0.3s;
  }

  & div:nth-child(3) {
    animation-delay: -0.15s;
  }
`;

export const ldsRingMiniWhite = css`
  display: inline-block;
  position: relative;
  width: 14px;
  height: 14px;

  & div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 14px;
    height: 14px;
    top: -4px;
    left: -4px;
    margin: 4px;
    border: 1px solid ${theme.fontColor.white};
    border-radius: 50%;
    animation: lds-ring-mini 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${theme.fontColor.white} transparent transparent transparent;
  }

  & div:nth-child(1) {
    animation-delay: -0.45s;
  }

  & div:nth-child(2) {
    animation-delay: -0.3s;
  }

  & div:nth-child(3) {
    animation-delay: -0.15s;
  }
`;

export const ldsRingMiniGrey = css`
  display: inline-block;
  position: relative;
  width: 14px;
  height: 14px;

  & div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 14px;
    height: 14px;
    top: -4px;
    left: -4px;
    margin: 4px;
    border: 1px solid ${theme.colors.defaultblue};
    border-radius: 50%;
    animation: lds-ring-mini 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${theme.colors.defaultblue} transparent transparent
      transparent;
  }

  & div:nth-child(1) {
    animation-delay: -0.45s;
  }

  & div:nth-child(2) {
    animation-delay: -0.3s;
  }

  & div:nth-child(3) {
    animation-delay: -0.15s;
  }
`;

export const ldsRingNormal = css`
  display: inline-block;
  position: relative;
  width: 34px;
  height: 34px;

  & div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 34px;
    height: 34px;
    margin: 0px;
    border: 2px solid #2a5cb2;
    border-radius: 50%;
    animation: lds-ring-mini 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #2a5cb2 transparent transparent transparent;
  }

  & div:nth-child(1) {
    animation-delay: -0.45s;
  }

  & div:nth-child(2) {
    animation-delay: -0.3s;
  }

  & div:nth-child(3) {
    animation-delay: -0.15s;
  }
`;

injectGlobal`


@keyframes lds-ring {

  0% {

    transform: rotate(0deg);

  }

  100% {

    transform: rotate(360deg);

  }

}

@keyframes lds-ring-mini {

  0% {

    transform: rotate(0deg);

  }

  100% {

    transform: rotate(360deg);

  }

}

@keyframes lds-ring-mini-2 {

  0% {

    transform: rotate(0deg);

  }

  100% {

    transform: rotate(360deg);

  }

}


      `;
