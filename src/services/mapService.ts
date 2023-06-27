export const getDistanceLabel = (time: any) => {
  const { hours, minutes } = time;
  const hoursLabel = hours > 0 ? `${hours} hours` : '';
  const minutesLabel = minutes > 0 ? `${minutes} minutes` : '';
  return `${hoursLabel} ${minutesLabel}`;
}
