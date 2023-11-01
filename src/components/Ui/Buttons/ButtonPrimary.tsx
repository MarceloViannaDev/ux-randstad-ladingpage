import { ArrowDownCircleIcon, SettingsIcon, UploadIcon } from '../Icons/Icons';

type Color = 'outlined' | 'filled';
type Variant = 'read' | 'upload' | 'settings';
type Label = 'read' | 'upload' | 'settings';

type ButtonPrimaryProps = React.ButtonHTMLAttributes<HTMLElement> & {
  color: Color;
  label: Label;
  variant: Variant;
};

const buttonColors = {
  outlined: {
    className: 'flex items-center gap-2 pr-4 border rounded-full border-default w-fit h-[42px]',
  },
  filled: {
    className: 'flex items-center gap-2 pr-4 text-white rounded-full bg-default w-fit h-[42px]',
  },
};

const buttonLabel = {
  read: <span className="lowercase">Read instructions</span>,
  upload: <span className="lowercase">Import your file</span>,
  settings: <span className="lowercase">Configuration</span>,
};

const buttonIcon = {
  read: <ArrowDownCircleIcon size={40} strokeWidth={1} />,
  upload: <UploadIcon size={40} strokeWidth={1} className="pl-4" />,
  settings: <SettingsIcon size={40} strokeWidth={1} className="pl-4" />,
};

export const ButtonPrimary = ({ color, label, variant, ...props }: ButtonPrimaryProps) => {
  return (
    <button {...buttonColors[color]} {...props}>
      {buttonIcon[variant]}
      {buttonLabel[label]}
    </button>
  );
};
