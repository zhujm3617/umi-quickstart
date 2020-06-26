import React from 'react';
import './index.less';

import { ShopModelState, ConnectRC, ConnectProps, Loading, connect, history, Link } from 'umi';
import { DatePicker } from 'antd';
import moment from 'moment';
import WrapperEditTitle from '@/components/base-components/wrapper-edit-title'
import WrapperEditBottom from '@/components/base-components/wrapper-edit-bottom'

interface PageProps extends ConnectProps {
  shop: ShopModelState;
  loading: boolean;
  match: any;
  dispatch: any;
}

/*const PicSlideImg : ConnectRC<PageProps> = ({ shop, dispatch }) => {
  return (
    <div className="edit-container">
      <WrapperEditTitle title={shop.title}></WrapperEditTitle>
      <div className="edit-main">
        <div className="edit-main-warp">
          <DatePicker />
        </div>
      </div>
      <WrapperEditBottom></WrapperEditBottom>
    </div>
  );
}*/
class PicSlideImg extends React.Component<PageProps, any> {
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
        <div className="edit-main">
          <DatePicker onChange={(date, dateString) => dispatch({ type: 'shop/changeDate', id, value: dateString })} value={moment(moduleData.time, 'YYYY-MM-DD')} />
        </div>
        <WrapperEditBottom save={() => dispatch({type: 'shop/save', id})} cancel={() => dispatch({type: 'shop/cancel', id})}></WrapperEditBottom>
      </div>
    )
  }
}

export default connect(({ shop }: { shop: ShopModelState; }) => ({ shop }))(PicSlideImg);
