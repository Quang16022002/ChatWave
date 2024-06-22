import React from 'react'
import './HomeComponent.scss'

const HomeComponent = () => {
    
  return (
    <div className='HomeComponent'>

        <div>
            <div>
                <input
                type='serch'
                name='name'
                placeholder='Tìm kiếm'
                />
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <div></div>

        </div>
        <div>
            list các tin nhắn
        </div>
    </div>
  )
}

export default HomeComponent