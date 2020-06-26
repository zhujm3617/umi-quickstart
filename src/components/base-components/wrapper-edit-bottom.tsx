import React from 'react';
import { Button } from 'antd'

export default (props: any) => {
  return (
    <div className="edit-bottom">
      <Button type="primary" onClick={props.save}>保存</Button>
      <Button onClick={props.cancel}>取消</Button>
    </div>
  )
}
