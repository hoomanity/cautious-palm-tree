import React from 'react'
import Menu from '../components/Menu'
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
    <h1>Discover the Charm of Feline Companionship</h1>
    <p>
    <p>Cats, beloved companions to humans for thousands of years, are fascinating creatures that have woven themselves into the fabric of our lives. With their sleek fur, sharp eyes, and graceful movements, cats are renowned for their enigmatic charm. These independent and agile creatures have made their mark on history, revered in various cultures for their symbolism and admired for their prowess as hunters.
    <br />
    <br />
    One of the most distinctive features of cats is their adaptability. Domestic cats have seamlessly integrated into diverse environments worldwide, from bustling city apartments to rural farmlands. Their ability to adjust to different surroundings and form strong bonds with humans contributes to their widespread popularity as pets. Cats are known for their self-sufficiency, yet they can also be affectionate and playful companions, providing comfort and joy to their human counterparts.
    <br />
    <br />
    Beyond their physical grace, cats are celebrated for their unique vocalizations. From the soothing purr that signifies contentment to the playful meow that signals a desire for attention, each cat's voice is as individual as its personality. The wide range of vocalizations adds an extra layer of communication between cats and their human caregivers, fostering a deep and nuanced understanding of these mysterious creatures.
    <br />
    <br />
   Cats have a rich cultural significance, often symbolizing both good and bad omens in folklore. In ancient Egypt, cats were revered and associated with deities, while in medieval Europe, they were occasionally linked to superstitions about witches. Despite these varying cultural interpretations, cats have universally captured the human imagination, inspiring art, literature, and countless internet memes. Their playful antics, aloof expressions, and endearing quirks continue to captivate people around the world.
      </p>
    </p>
    </div>
    <Menu />
   </div>
  )
}

export default Single