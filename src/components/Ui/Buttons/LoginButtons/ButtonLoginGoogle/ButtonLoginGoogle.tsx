import clsx from 'clsx';
import { Images } from '../../../Images/Images';

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
      <img
        src={Images.IconConnectWithGoogle}
        alt="Google login"
        aria-label="Login with Google"
        className="w-4 h-4"
      />
      {text}
    </button>
  );
};
