import React from 'react';
import './layout.less'
import 'moment/locale/zh-cn';


export default (props: any) => {
  const { location: { pathname } } = props;
  const isModule = pathname.includes('/modules');

  return (
    <div className="container">
      {/* 模块展示区域 */
        !isModule && <div className="module-preview">{props.children}</div>
      }
      {/* 模块编辑区域  */
        isModule && <div className="module-edit">{props.children}</div>
      }
    </div>
  );
}
