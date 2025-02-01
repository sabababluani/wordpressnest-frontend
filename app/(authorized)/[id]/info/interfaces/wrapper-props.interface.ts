export interface WrapperPropsInterface {
  enhancedWidth?: boolean;

  caption: string;
  fieldsInnerContent: string | undefined;
  additionalHref?: string;
  onClick?: () => void;
}
