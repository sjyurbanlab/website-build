import { useContext } from 'react';
import { ViewportContext } from '@utilities/ViewportContext';

export const useViewport = () => useContext(ViewportContext);
