import React from 'react';
import styles from './index.less';
import { Link } from 'umi'

export default () => {
  return (
    <div>
      <Link to="/modules/pic-slide-img/c001"><h3 className={styles.title}>pic-slide-img</h3></Link>
      <Link to="/modules/sp-single-product/c002"><h3 className={styles.title}>sp-single-product</h3></Link>
    </div>
  );
}
