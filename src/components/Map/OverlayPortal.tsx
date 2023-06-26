// import { useMemo } from "react";
// import { useGoogleMap } from "@react-google-maps/api";

// const OverlayPortal = ({ children, from, to }) => {
//   // Create a new div element for every InfoWindow
//   const div = document.createElement('div');
//   const map = useGoogleMap();

//   const adjustedTo = useMemo(() => {
//     const bounds = map.getBounds();
//     if (!bounds.contains(to)) {
//       // The corners of the map bounds
//       const boundsCorners = [
//         { lat: bounds.getSouthWest().lat(), lng: bounds.getSouthWest().lng() }, // bottom left
//         { lat: bounds.getNorthEast().lat(), lng: bounds.getSouthWest().lng() }, // top left
//         { lat: bounds.getNorthEast().lat(), lng: bounds.getNorthEast().lng() }, // top right
//         { lat: bounds.getSouthWest().lat(), lng: bounds.getNorthEast().lng() }  // bottom right
//       ];

//       // Check intersection with each side of the map bounds
//       for (let i = 0; i < boundsCorners.length; i++) {
//         const start = boundsCorners[i];
//         const end = boundsCorners[(i + 1) % boundsCorners.length]; // Next corner, or first corner if we're at the last corner
//         const intersection = lineIntersection(from, to, start, end);
//         if (intersection) {
//           return intersection;
//         }
//       }
//     }

//     // If the 'to' point is in bounds, or no intersection was found, return the original 'to' point
//     return to;
//   }, [from, to, map]);

//   useEffect(() => {
//     const InfoWindow = new window.google.maps.OverlayView();
//     InfoWindow.onAdd = () => {
//       const root = ReactDOM.createRoot(div);
//       root.render(children);
//     }
//     InfoWindow.draw = () => {
//       const panes = InfoWindow.getPanes();
//       panes.floatPane.appendChild(div);
//       div.style.position = 'absolute';
//       // Convert the LatLng position to actual pixel position on the map
//       const point = InfoWindow.getProjection().fromLatLngToDivPixel(position);
//       if (point) {
//         div.style.left = `${point.x}px`;
//         div.style.top = `${point.y}px`;
//       }
//     };
//     InfoWindow.onRemove = () => {};

//     // Add InfoWindow to the map
//     InfoWindow.setMap(map);

//     // Cleanup function to remove InfoWindow from map
//     return () => {
//       InfoWindow.setMap(null);
//       ReactDOM.unmountComponentAtNode(div);
//     };
//   }, [children, div, map, adjustedTo]);

//   return null;
// };

// export default OverlayPortal;
