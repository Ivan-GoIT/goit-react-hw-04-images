import{memo} from 'react'
import css from './Button.module.css';
export const Button = memo(({onClick}) => {
  return (
    <button type="button" className={css.buttonLoad} onClick={onClick}>
      Load more
    </button>
  );
});
