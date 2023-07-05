import t from '../services/translatorService'

export const getDistanceLabel = (time: any) => {
  const { hours, minutes } = time;

  return hours > 0
    ? t('dyn-package.minutesAndHours', { hours, minutes })
    : t('dyn-package.minutes', { minutes })
}
