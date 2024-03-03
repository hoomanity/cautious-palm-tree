import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  const posts =[
  {
    id: 1,
    name: "Whiskers",
    breed: "Siamese",
    desc: `
      Whiskers is an enchanting Siamese cat with a mesmerizing cream-colored coat. 
      Known for their striking blue almond-shaped eyes, Siamese cats are not only beautiful but also incredibly intelligent and social. 
      Whiskers loves to engage in interactive play and will follow you around the house, seeking your attention and affection. 
      With a graceful and slender build, Whiskers is a true feline companion who adds a touch of elegance to any home.
    `,
    img: "https://images.pexels.com/photos/2071882/pexels-photo-2071882.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 2,
    name: "Shadow",
    breed: "Maine Coon",
    desc: `
      Meet Shadow, the majestic Maine Coon with a luxurious tabby coat that's as soft as it is stunning. 
      Maine Coons are one of the largest domestic cat breeds, known for their friendly and gentle nature. 
      Shadow's friendly demeanor and sociable personality make him a beloved member of any household. 
      With tufted ears and a plume-like tail, Shadow is a regal feline companion who loves lounging and receiving chin scratches.
    `,
    img: "https://images.pexels.com/photos/33537/cat-animal-cat-portrait-mackerel.jpg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 3,
    name: "Mittens",
    breed: "Persian",
    desc: `
      Allow me to introduce Mittens, a picture of elegance and grace in the form of a Persian cat. 
      With a voluminous and silky white coat, Mittens is the epitome of sophistication. 
      Persian cats are known for their calm and laid-back personalities, and Mittens is no exception. 
      This feline beauty enjoys basking in sunlight by the window, and her sparkling blue eyes are sure to capture your heart.
    `,
    img: "https://images.pexels.com/photos/33358/cat-fold-view-grey-fur.jpg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 4,
    name: "Oreo",
    breed: "Domestic Shorthair",
    desc: `
      Oreo, the playful Domestic Shorthair, is a delight to have around. 
      With a distinctive black and white coat resembling the beloved cookie, Oreo's playful antics and boundless energy bring joy to any home. 
      Domestic Shorthairs are known for their adaptability and make wonderful companions. 
      Whether chasing toys or curling up for a nap, Oreo is sure to win your heart with those big, expressive eyes.
    `,
    img: "https://images.pexels.com/photos/96938/pexels-photo-96938.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 5,
    name: "Leo",
    breed: "Bengal",
    desc: `
      Leo, the adventurous Bengal cat, is a stunning feline with a wild side. 
      Known for their distinctive spotted or marbled coat patterns, Bengals are reminiscent of their wild ancestors. 
      Leo loves climbing and exploring, showcasing the athleticism typical of this breed. 
      With a sleek coat and an inquisitive nature, Leo is an engaging and playful companion who brings a touch of the exotic to your home.
    `,
    img: "https://images.pexels.com/photos/1381112/pexels-photo-1381112.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  ];
  
  return (
    <div className='home'>
      <div className="posts">
        {posts.map(post=>(
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt=""/>
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.name}</h1>
              </Link>
                <h3>{post.breed}</h3>
                <p>{post.desc}</p>
                <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home