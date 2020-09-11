import { createContext } from 'react';

export type Viewport = {
  width: number;
  height: number;
  isMobile: boolean;
  isMobileLandscape: boolean;
  navBarHeight: number;
};

export const defaultViewport: Viewport = {
  width: 0,
  height: 0,
  isMobile: false,
  isMobileLandscape: false,
  navBarHeight: 0,
};

const smBreakpoint = 640;

export const generateViewport = (window: Window): Viewport => ({
  width: window.innerWidth,
  height: window.innerHeight,
  isMobile: window.innerWidth < smBreakpoint,
  isMobileLandscape: window.innerHeight < smBreakpoint,
  navBarHeight: 0,
});

export const ViewportContext = createContext<Viewport>(defaultViewport);
