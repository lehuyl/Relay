import React from 'react'
import {Card, Avatar} from 'antd'
import { EditOutlined, EllipsisOutlined } from '@ant-design/icons'

const { Meta } = Card;
const MessageCard = () => {
    return (
     <Card style={{ width: 300}}  
        actions={[
         <EditOutlined key="edit" />,
         <EllipsisOutlined key="ellipsis" />,
      ]}>
    <Meta
      avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
      title = "New Illenium Song!!!"
      description="https://open.spotify.com/track/5dAtKXyrQoQW054LZqJ5dP?si=aj6J_gGPSjKGgeavD3FA0w"
    />
    </Card>
    )
}
export default MessageCard;


