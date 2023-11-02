export interface IViewModel {
  title: string;
  paragraph: string;
  isMobile?: boolean;
  onClick: () => void;
}

export type TViewProps = {
  isMobile?: boolean;
};
