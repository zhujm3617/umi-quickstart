import React from 'react';

import { history } from 'umi';
import WrapperEditTitle from '@/components/base-components/wrapper-edit-title'
import WrapperEditBottom from '@/components/base-components/wrapper-edit-bottom'

export default function WrapperComponent(WrappedComponent: any) {
  return class extends React.Component<any, any> {
    render() {
      const { shop: { modules }, match: { params: { id } }, dispatch } = this.props;
      const moduleData = modules && modules[id];
      if(!moduleData) {
        history.push('/modules/index');
        return null;
      }

      return (
        <div className="edit-container">
          <WrapperEditTitle title={moduleData.title}></WrapperEditTitle>
          <WrappedComponent {...{moduleData, id, dispatch}} />
          <WrapperEditBottom save={() => dispatch({type: 'shop/save', id})} cancel={() => dispatch({type: 'shop/cancel', id})}></WrapperEditBottom>
        </div>
      )
    }
  }
}
