import React from 'react';

// Exported from redux-devtools
import { createDevTools } from 'redux-devtools';

// Monitors are separate packages, and you can make a custom one
// import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
import SliderMonitor from 'redux-slider-monitor';

// createDevTools takes a monitor and produces a DevTools component
const DevTools = createDevTools(
  // Monitors are individually adjustable with props.
  // Consult their repositories to learn about those props.
  // Here, we put LogMonitor inside a DockMonitor.
  <DockMonitor toggleVisibilityKey='shift-ctrl-h'
    changePositionKey='shift-ctrl-q'
    defaultPosition='bottom'
    defaultSize={0.15}
    defaultIsVisible={false}
    >
    <SliderMonitor keyboardEnabled />
  </DockMonitor>
);

export default DevTools;
