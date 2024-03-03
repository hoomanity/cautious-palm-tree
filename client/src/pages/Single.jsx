import React from 'react'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import {Link} from 'react-router-dom'


const Single = () => {
  return (
   <div className="single">
    <div className="content">
      <img src="https://images.pexels.com/photos/20340989/pexels-photo-20340989/free-photo-of-cat-next-to-fern-leaves.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
    <div className="user">
      <img src="https://images.pexels.com/photos/19477996/pexels-photo-19477996/free-photo-of-close-up-of-a-white-cat.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
      <div className="info">
        <span>hooman</span>
        <p>posted 2 days ago</p>
      </div>
      <div className="edit">
        <Link to={`/write?edit=2`}>
        <img src={Edit} alt="" />
        </Link>
        <img src={Delete} alt="" />
      </div>
    </div>
    </div>
    <div className="menu">menu</div>
   </div>
  )
}

export default Single