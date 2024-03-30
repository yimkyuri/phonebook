import React from 'react';

const ContactItem = ({item}) => {
  return (
    <li>
        <div className='img' lg={2}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt ="" />
        </div>
        <div className='info' lg={10}>
            <p>{item.name}</p>
            <p>{item.phoneNumber}</p>
        </div>
    </li>
  )
}

export default ContactItem
