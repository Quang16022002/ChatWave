import React from 'react'
import './UserGroupComponent.scss'
const UserGroupComponent = () => {
  return (
  
         <div  className="infoUser_item col-md-3 col-sm-6 py-2 ">
            <div className="  d-flex ">
                <img className="avatar-homeAll" src="https://s3.cloud.cmctelecom.vn/tinhte1/2012/11/3245056_cover.jpg"/>
               <div style={{width:'100%'}}  className="d-flex justify-content-between">
                    <div className="infoUser d-flex flex-column ">
                        <h1>Giao diện người máy</h1>
                        <p style={{color:'rgb(148, 148, 148)'}}>Đình Quang: Tối họp nhé</p>
                    </div>
                    <div style={{marginRight:60}}>
                        <p style={{color:'rgb(148, 148, 148)'}}>54 phút</p>
                        <p style={{color:'#f45484', fontWeight:600}}>Online</p>
                    </div>
               </div>
            </div>
        </div>
   
  )
}

export default UserGroupComponent