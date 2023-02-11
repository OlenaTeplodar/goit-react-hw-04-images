import { Blocks } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <Blocks
      visible={true}
      height="480"
      width="480"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      className={css.Loader}
    />
  );
};

export default Loader;
