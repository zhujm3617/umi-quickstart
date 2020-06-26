import React from 'react';
import { ShopModelState, connect } from 'umi';
import WrapperComponent from '@/components/base-components/wrapper-component'
import { DatePicker } from 'antd';
import moment from 'moment';

class SpSingleProduct extends React.Component<any, any> {
  render() {
    const { dispatch, id, moduleData } = this.props;

    return (
      <div className="edit-main">
        <DatePicker onChange={(date, dateString) => dispatch({ type: 'shop/changeDate', id, value: dateString })} value={moment(moduleData.time, 'YYYY-MM-DD')} />
      </div>
    )
  }
}

export default connect(({ shop }: { shop: ShopModelState; }) => ({ shop }))(WrapperComponent(SpSingleProduct));
