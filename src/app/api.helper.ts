// helper function for detecting SSR
const windowAvailable = () =>
  !!(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
  )

const extractObjectValueByKey = (obj: object, filterCondition: string) =>
  Object.entries(obj)
    .filter(([k, v]) => k === filterCondition)
    .map(([k, v]) => v) as string[]

export { extractObjectValueByKey, windowAvailable }

