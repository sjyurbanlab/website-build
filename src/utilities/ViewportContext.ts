import { createContext } from 'react';

export type Viewport = {
  width: number;
  height: number;
  isMobile: boolean;
  isMobileLandscape: boolean;
};

export const defaultViewport: Viewport = {
  width: 0,
  height: 0,
  isMobile: false,
  isMobileLandscape: false,
};

const smBreakpoint = 640;

export const generateViewport = (window: Window): Viewport => ({
  width: window.innerWidth,
  height: window.innerHeight,
  isMobile: window.innerWidth < smBreakpoint,
  isMobileLandscape: window.innerHeight < smBreakpoint,
});

export const ViewportContext = createContext<Viewport>(defaultViewport);
