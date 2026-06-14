// src/components/UX/moveable/types/moveable-props.ts
export interface MoveableVueProps {
  // core behavior
  snappable?: boolean;
  origin?: boolean;

  // drag / resize / rotate
  draggable?: boolean;
  resizable?: boolean;
  scalable?: boolean;
  rotatable?: boolean;
  warpable?: boolean;

  // interaction helpers
  pinchable?: boolean;
  edgeDraggable?: boolean;

  // group / selection
  target?: HTMLElement | SVGElement | Array<HTMLElement | SVGElement> | null;
  targets?: Array<HTMLElement | SVGElement>;

  // guidelines / snapping
  snapThreshold?: number;
  snapGap?: boolean;
  snapDirections?: boolean;
  snapRotationThreshold?: number;

  // scroll behavior
  scrollable?: boolean;
  scrollContainer?: HTMLElement | Window | null;

  // rendering
  className?: string;
  dragArea?: boolean;

  // lifecycle flags
  checkInput?: boolean;
  zoomable?: boolean;
  originDraggable?: boolean;
}