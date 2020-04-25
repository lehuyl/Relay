import React from 'react'
import { Carousel } from 'antd';
import MessageCard from './MessageCard'

const CardCategory = () => {

    return (
        <Carousel dotPosition={"left"}>
          <div>
            <MessageCard />
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
        </Carousel>
    )
}

export default CardCategory