import * as theme from '../../../styles/theme.js';
import { css } from 'react-emotion';

export const btn = css`
  display: inline-flex;
  font-family: ${theme.fontFamily.text};
  height: ${theme.dimensions.buttonHeight};
  padding: 0 8px;
  border-radius: ${theme.radius.button};
  font-size: ${theme.fontSize.regular};
  font-weight: ${theme.fontWeight.bold};
  cursor: pointer;
  &:active {
    box-shadow: ${theme.shadow.active};
  }
  &:focus {
    box-shadow: rgb(255, 255, 255) 0px 0px 0px 1px,
      ${theme.colors.blue} 0px 0px 0px 2px;
    outline-color: ${theme.colors.blue};
    text-decoration: none;
  }
`;

export const color_danger = css`
  color: ${theme.fontColor.red};
`;

export const color_success = css`
  color: ${theme.colors.green};
`;

export const btn_primary = css`
  background-color: ${theme.colors.defaultblue};
  color: ${theme.fontColor.darkBackground};
  border: 1px solid ${theme.colors.defaultblue};
  border-bottom: ${theme.borderColors.borderbottom};

  &:hover {
    background-color: ${theme.colors.defaultblue};
    border: 1px solid ${theme.colors.defaultblue};
    color: ${theme.fontColor.white};
  }
`;

export const btn_secondary_white = css`
  background-color: ${theme.backgroundColors.white};
  color: ${theme.fontColor.light};
  border: 1px solid ${theme.borderColors.default};
  border-bottom: ${theme.borderColors.borderbottom};
  &:hover {
    background-color: ${theme.backgroundColors.white};
    border: 1px solid ${theme.borderColors.active};
    color: ${theme.fontColor.dark};
  }
`;

export const btn_secondary_grey = css`
  background-color: ${theme.backgroundColors.extraLightGrey};
  color: ${theme.fontColor.light};
  border: 1px solid ${theme.borderColors.default};
  border-bottom: ${theme.borderColors.borderbottom};
  &:hover {
    background-color: ${theme.backgroundColors.extraLightGrey};
    border: 1px solid ${theme.borderColors.active};
    color: ${theme.fontColor.dark};
  }
`;

export const btn_borderless = css`
  background-color: initial;
  color: ${theme.fontColor.light};
  border: none;
  &:hover {
    background-color: ${theme.backgroundColors.lightGrey};
    color: ${theme.fontColor.dark};
  }
`;

export const btn_skeleton = css`
  background-color: initial;
  color: ${theme.fontColor.darkBackground};
  border: 1px solid ${theme.borderColors.default};
  &:hover {
    color: ${theme.fontColor.white};
    border: 1px solid ${theme.borderColors.white};
  }
`;

export const disabled = css`
  background-color: ${theme.backgroundColors.lightGrey};
  color: ${theme.fontColor.veryLight};
  border: 1px solid ${theme.borderColors.default};
  cursor: not-allowed;
  &:hover {
    background-color: ${theme.backgroundColors.lightGrey};
    border: 1px solid ${theme.borderColors.default};
    color: ${theme.fontColor.veryLight};
  }
  &:active {
    box-shadow: none !important;
  }
`;

export const iconTextJustify = css`
  align-items: center;
  display: flex;
`;

export const padding = css`
  width: 4px;
  height: 32px;
`;

export const alignContainer = css`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
`;

export const alignContainerTextOnly = css`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  align-items: center;
`;

export const btn_loader = css`
  position: relative;
  pointer-events: none;
  &:before {
    position: absolute;
    top: -1px;
    left: -1px;
    bottom: -1px;
    right: -1px;
    background: #fff;
    opacity: 0.35;
    content: '';
    border-radius: inherit;
    z-index: 1;
    -webkit-transition: opacity 0.2s;
    transition: opacity 0.2s;
    pointer-events: none;
  }
`;

export const anchor = css`
  text-decoration: none;
  display: flex;
  font-family: ${theme.fontFamily.text};
  cursor: pointer;
  font-size: ${theme.fontSize.regular};
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.fontColor.primaryLink};
  &:hover {
    text-decoration: underline;
  }
`;

export const anchorsecondary = css`
  color: ${theme.fontColor.secondaryLink};
`;

export const anchorexternal = css`
  color: ${theme.fontColor.externalLink};
`;

export const anchordisabled = css`
  color: ${theme.fontColor.veryLight};
  cursor: not-allowed;
`;

export const column_btn = css`
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
`;
