type SlInputEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'sl-input': SlInputEvent;
  }
}

export default SlInputEvent;
