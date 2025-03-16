export interface Screenshot {
  src: string;
}

export interface PreviewProps {
  screenshots: Screenshot[];
  isOpen: boolean;
  currentIndex: number;
  onClose: () => void;
  onNavigate: (direction: number) => void;
}
