import { useState, useEffect } from 'react';

const useHoveredParagraphCoordinate = () => {
  const [coordinates, setCoordinates] = useState({ top: 0, left: 0, text: '' });

  useEffect(() => {
    const handleMouseOver = (event:any) => {
      if (event.target.tagName.toLowerCase() === 'p') {
        const rect = event.target.getBoundingClientRect();
        setCoordinates({
          top: rect.top + window.scrollY,
          left: rect.left + window.scrollX,
          text: event.target.textContent,
        });
      } else {
        setCoordinates({ top: 0, left: 0, text: '' });
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return coordinates;
};

export default useHoveredParagraphCoordinate;

/**
 * Gets bounding boxes for an element. This is implemented for you
 */
export function getElementBounds(elem: HTMLElement) {
  const bounds = elem.getBoundingClientRect();
  const top = bounds.top + window.scrollY;
  const left = bounds.left + window.scrollX;

  return {
    x: left,
    y: top,
    top,
    left,
    width: bounds.width,
    height: bounds.height,
  };
}



/**
 * **TBD:** Implement a function that checks if a point is inside an element
 */
export function isPointInsideElement(
  coordinate: { x: number; y: number },
  element: HTMLElement
): boolean {}

/**
 * **TBD:** Implement a function that returns the height of the first line of text in an element
 * We will later use this to size the HTML element that contains the hover player
 */
export function getLineHeightOfFirstLine(element: HTMLElement): number {}

export type HoveredElementInfo = {
  element: HTMLElement;
  top: number;
  left: number;
  heightOfFirstLine: number;
};

/**
 * **TBD:** Implement a React hook to be used to help to render hover player
 * Return the absolute coordinates on where to render the hover player
 * Returns null when there is no active hovered paragraph
 * Note: If using global event listeners, attach them window instead of document to ensure tests pass
 */

