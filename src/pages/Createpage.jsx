import { useEffect, useState } from 'react';
import './Createpage.css'
import axios from 'axios';


export const Create = ({tags}) => {
    const [formData, setFormData] = useState({
        title: '',
        tags: [],
        ingredients: '',
        servings: '',
        prep_time: '',
        instructions: '',
        custom_tags: '',
        recipe_image: '',
    });


    function handleSubmit(e) {
        e.preventDefault();
        // if formData.custom_tags is undefined or is equal to an empty string then delete it
        if (!formData.custom_tags) {
            // delete doesn't throw an error even if the key is not defined in the object
            delete formData.custom_tags
        }
        if (!formData.recipe_image) {
            delete formData.recipe_image
        }
        console.log("from handleSubmti", formData);
        axios.post('http://localhost:8000/api/recipes/', formData, 
        {
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
            }
        }
        )
        // .then(response => response.json())
        .catch(error => console.error(error))
    }

    function handleChange(e) {
        const newData = {...formData, [e.target.name]: e.target.value}
        // console.log('this is the new data', newData);
        setFormData(newData);
        // console.log(formData);
    }

        

    const accessToken = localStorage.getItem('accessToken');

// function for testing purposes
    function createRecipe(event) {
        event.preventDefault()
        const content = {
            'title': 'pasta',
            'tags': [4, 5],
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

    function addTags(id) {
        const tagsCopy = formData.tags.slice()
        const index = tagsCopy.indexOf(id);
        if (index > -1) {
            tagsCopy.splice(index,1);
            console.log(tagsCopy);
        }
        else {
            tagsCopy.push(id);
            console.log(tagsCopy);
        }
        setFormData({...formData, tags: tagsCopy})

        
    }

    return(
        <div className="create-page">
            <div className='create-background'></div>
            {/* <button id="test-button" onClick={e => createRecipe(e)}>post test</button> */}
            <form className="create-form" onSubmit={e => handleSubmit(e)}>
                <div className='small-inputs'>
                    <div className='left-side'>

                        <input className="create-input" 
                            placeholder="title"
                            name='title' value={formData.title}
                            onInput={e => handleChange(e)}
                        ></input>

                        <input
                            className='create-input'
                            placeholder='image url'
                            name='recipe_image'
                            onChange={handleChange}
                        >
                        </input>


                        <input 
                            className='create-input'
                            placeholder='custom tags'
                            name='custom_tags'
                            value={formData.custom_tags}
                            onChange={handleChange}>
                        </input>

                        <input className="create-input" placeholder="servings" 
                        type='number'
                            name='servings'
                            value={formData.servings}
                            onChange={handleChange}
                        ></input>

                        <input className="create-input" placeholder="prep-time"
                            type='number'
                            name='prep_time' value={formData.prep_time}
                            onChange={handleChange}
                            
                        ></input>
                    </div>

                    <div className='tags-container'>
                        <ul>
                            {tags.map( tag => (
                                <li key={tag.id}>
                                    <input type='checkbox' id={tag.id}  onChange={() => addTags(tag.id)}></input> 
                                    <label htmlFor={tag.id} >{tag.name}</label>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>



                <textarea placeholder='ingredients' className='create-textarea'
                    name='ingredients' value={formData.ingredients}
                    onChange={handleChange}
                ></textarea>

                <textarea placeholder='instructions' className='create-textarea'
                    name='instructions' value={formData.instructions}
                    onChange={handleChange}
                    ></textarea>

                <button className='recipe-submit-button' type='submit'>Create Recipe</button>
            </form>
        </div>
    )
}