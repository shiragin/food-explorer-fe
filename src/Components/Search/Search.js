import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useRecipesContext } from '../../Context/RecipesContext';
import AdvancedSearch from './AdvansedSearch';
import BasicSearch from './BasicSearch';
import '../../scss/Search.scss';

export default function Search() {
  const { getRecipesByCode, setRecipeList } = useRecipesContext();
  const [name, setName] = useState('');
  const [country, setCountry] = useState([]);

  async function searchHandler(e) {
    const res = await getRecipesByCode(country);
    console.log(res);
    setRecipeList(res);
  }

  return (
    <>
      <div className='page-title'>Find your next favourite meal</div>
      <Form>
        <BasicSearch name={name} setName={setName} />
        <AdvancedSearch country={country} setCountry={setCountry} />

        <Button
          variant='primary'
          type='button'
          className='search-button'
          onClick={searchHandler}
        >
          Search
        </Button>
      </Form>
    </>
  );
}
