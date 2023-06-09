import { memo, useMemo, useState } from 'react'

interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  classes?: string | Array<string>;
}

export const Input = memo((props: InputProps) => {
  const [inputValue, setInputValue] = useState('');

  const classes = useMemo(() => {
    if (props.classes) {
      return props.classes instanceof Array ? props.classes.join(' ') : props.classes;
    }
    return '';
  }, [props]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (props.onChange) props.onChange(e);
  }

  return (
    <input className={classes} onChange={onChange} value={inputValue} type="text" {...props}/>
  )
})