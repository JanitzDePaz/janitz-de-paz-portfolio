interface Window {
  turnstile?: {
    render: (
      container: HTMLElement | string,
      options: Record<string, unknown>,
    ) => void;
    reset: () => void;
  };
}
