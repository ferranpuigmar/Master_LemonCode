export function useViewTransition(callback: () => void) {
  if (typeof document.startViewTransition !== 'function') {
    document.startViewTransition(() => {
      callback()
    })
  } else {
    callback()
  }
}
