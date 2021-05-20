import {useState} from 'react';
import './App.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function App() {
  const [content, setContent] = useState({
    title: '',
    content: ''
  })

  const [viewContent, setViewContent] = useState([]);

  const getValue = e => {
      const {name, value} = e.target;
      setContent({
        ...content,
        [name]: value
      })
      console.log(content);
  };

  return (
    <div className="App">
      <h1>BOARD</h1>
      <div className='board'>
        {viewContent.map(element =>
          <div>
          <h2>{element.title}</h2>
          <div>
            {element.content}
          </div>
        </div>
        )}
      </div>
      <div className='form-wrapper'>
              <input className="title-input" type='text' placeholder='Title' onChange={getValue} name='title'/>

            </div>
            <button
            className="submit-button"
            onClick={() => {
              setViewContent(viewContent.concat({...content}));
            }
            }>Submit</button>

          </div>
        );
      }

export default App;
