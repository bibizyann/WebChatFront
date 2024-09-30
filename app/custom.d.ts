declare namespace JSX {
  interface IntrinsicElements {
    "dotlottie-player": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      autoplay?: boolean;
      controls?: boolean;
      loop?: boolean;
      src?: string;
      style?: React.CSSProperties;
    };
  }
}
