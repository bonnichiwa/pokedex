import React from 'react';


// if you don't use export default you would import it as { SearchForm}
export const SearchForm = () => (
    <form>
        <input
        type='text'
        placeholder='pokemon number'
        />
        
        <br/>

        <button>
        search
        </button>
    </form>
);