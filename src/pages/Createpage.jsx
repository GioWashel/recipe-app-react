import { useState } from 'react';
import './Createpage.css'
import axios from 'axios';



export const Create = () => {
    const [formData, setFormData] = useState({
        title: '',
        tags: [],
        ingredients: '',
        servings: '',
        prep_time: '',
        instructions: '',
    })
    
    function handleSubmit(e) {
        e.preventDefault();
        // if formData is undefined or is equal to an empty string then delete it
        if (formData.custom_tags == '') {
            delete formData.custom_tags
        }
        console.log("from handleSubmti", formData);
        axios.post('http://localhost:8000/api/recipes/', formData, 
        {
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
            }
        }
        ).then(response => response.json())
        .catch(error => console.error(error))

    }
    function handleChange(e) {
        const newData = {...formData, [e.target.name]: e.target.value}
        console.log('this is the new data', newData);
        setFormData(newData);
        console.log(formData);
    }

        

    const accessToken = localStorage.getItem('accessToken');

// function for testing purposes
    function createRecipe(event) {
        event.preventDefault()
        const content = {
            'title': 'pizza',
            'tags': [4],
            // 'recipe_image': '',
            'custom_tags':'simple',
            'ingredients': 'cilantro',
            'servings': 5,
            'instructions': 'chop',
            'prep_time': 3,
        }
        const url = 'http://localhost:8000/api/recipes/'

       axios.post(url, 
        content,
        { headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`,
            },
        })
       .then(response => console.log(response))
       .catch(error => console.error(error))
    }

    return(
        <div className="create-page">
            <form className="create-form" onSubmit={e => handleSubmit(e)}>
            {/* <button onClick={e => createRecipe(e)}>post test</button> */}
                <input className="create-input" 
                    placeholder="title"
                    name='title' value={formData.title}
                    onInput={e => handleChange(e)}
                    ></input>

                {/* <div className='tag-selection'>
                    <input type='checkbox' value='vegan' id='vegan-tag' name='vegan'></input>
                    <label for='vegan-tag'>vegan</label>
                </div> */}

                <input 
                    placeholder='custom_tags'
                    
                    name='custom_tags'
                    value={formData.custom_tags}
                    onChange={handleChange}
                ></input>

                <textarea placeholder='ingredients' className='create-textarea'
                    name='ingredients' value={formData.ingredients}
                    onChange={handleChange}
                    ></textarea>

                <input className="create-input" placeholder="servings" 
                    name='servings'
                    value={formData.servings}
                    onChange={handleChange}
                    ></input>

                <input className="create-input" placeholder="prep-time"
                    name='prep_time' value={formData.prep_time}
                    onChange={handleChange}
                    
                    ></input>

                <textarea placeholder='instructions' className='create-textarea'
                    name='instructions' value={formData.instructions}
                    onChange={handleChange}
                    ></textarea>

                <button type='submit'>Create Recipe</button>
            </form>
        </div>
    )
}