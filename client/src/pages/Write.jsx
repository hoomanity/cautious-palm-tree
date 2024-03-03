import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {
  const [value, setValue] = useState('');
  console.log(value)

  return (
    <div className="add">
      <div className="content">
        <input type="text" placeholder='title' />
        <div className="editorContainer">
          <ReactQuill className='editor' theme="snow" value={value} onChange={setValue} />
          </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input style={{display:"none"}}  type="file" id="file" />
          <label htmlFor="file">Upload Image</label>
          <div className="buttons">
            <button>Save as a Draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <input type="radio" name='cat' value="art" id='art'/>
          <label htmlFor="art">Art</label>
          <input type="radio" name='cat' value="print" id='print'/>
          <label htmlFor="print">Print</label>
          <input type="radio" name='cat' value="ball" id='ball'/>
          <label htmlFor="ball">Ball</label>
          <input type="radio" name='cat' value="mango" id='mango'/>
          <label htmlFor="mango">Mango</label>
          <input type="radio" name='cat' value="cat" id='cat'/>
          <label htmlFor="cat">Cat</label>
          <input type="radio" name='cat' value="food" id='food'/>
          <label htmlFor="food">Food</label>
        </div>
      </div>
    </div>
  )
}

export default Write