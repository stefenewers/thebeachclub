/** Cross-section UI events (e.g. map zone → activation gallery). */
export const SELECT_ACTIVATION = "bc:select-activation";

export function selectActivation(id: string) {
  window.dispatchEvent(new CustomEvent<string>(SELECT_ACTIVATION, { detail: id }));
}
