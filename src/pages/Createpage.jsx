import './Createpage.css'
import axios from 'axios';



export const Create = () => {
    const accessToken = localStorage.getItem('accessToken');
    console.log(accessToken);


    function createRecipe(event) {
        event.preventDefault()
        const content = {
            'title': '',
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
            <form className="create-form">
            <button onClick={e => createRecipe(e)}>post test</button>
                <input className="create-input" placeholder="title"></input>
                <div className='tag-selection'>
                    <input type='checkbox' value='vegan' id='vegan-tag' name='vegan'></input>
                    <label for='vegan-tag'>vegan</label>
                </div>
                <textarea placeholder='ingredients' className='create-textarea'></textarea>
                <input className="create-input" placeholder="servings"></input>
                <input className="create-input" placeholder="prep-time"></input>
                <textarea placeholder='instructions' className='create-textarea'></textarea>
            </form>
        </div>
    )
}