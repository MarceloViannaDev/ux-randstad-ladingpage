import clsx from 'clsx';
import GoogleIcon from '../../../../../assets/icons/icon-connect-with-google.svg';

type ButtonLoginGoogleProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  text: string;
};

export const ButtonLoginGoogle: React.FC<ButtonLoginGoogleProps> = ({
  className,
  text,
  ...props
}) => {
  return (
    <button
      className={clsx(
        className,
        'flex items-center justify-between p-2 gap-1 rounded-full bg-default  text-white text-xs transition-colors duration-200'
      )}
      {...props}>
      <img src={GoogleIcon} alt="Google login" aria-label="Login with Google" className="w-4 h-4" />
      {text}
    </button>
  );
};
