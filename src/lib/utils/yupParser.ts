import { get, set } from 'lodash-es'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function yupToErrors<Values>(yupError: any): App.FormErrors<Values> {
  let errors: App.FormErrors<Values> = {}
  if (yupError.inner) {
    if (yupError.inner.length === 0) {
      return set(errors, yupError.path, yupError.message)
    }
    for (const err of yupError.inner) {
      if (!get(errors, err.path)) {
        errors = set(errors, err.path, err.message)
      }
    }
  }
  return errors
}
