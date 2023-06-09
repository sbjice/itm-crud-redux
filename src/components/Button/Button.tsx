import { memo, useMemo } from 'react';

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  classes?: string | Array<string>;
  text?: string;
}

export const Button = memo((props: ButtonProps) => {
  const classes = useMemo(() => {
    if (props.classes) {
      return props.classes instanceof Array ? props.classes.join(' ') : props.classes;
    }
    return '';
  }, [props]);

  return (
    <button
    className={classes}
    {...props}
    >{props?.text}</button>
  )
})