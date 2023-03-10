import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useRecipesContext } from '../../Context/RecipesContext';
import AdvancedSearch from './AdvansedSearch';
import BasicSearch from './BasicSearch';
import '../../scss/Search.scss';
import axios from 'axios';

export default function Search() {
  const { getRecipesByCode, setRecipeList, searched, setSearched } =
    useRecipesContext();
  const [name, setName] = useState('');
  const [country, setCountry] = useState([]);

  async function searchHandler(e) {
    console.log(country, name);
    const res = await getRecipesByCode(country);
    console.log(res);
    setRecipeList(res);
  }

  return (
    <>
      <div className='page-title'>Find your next favourite meal</div>
      <div className='search-form'>
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
      </div>
    </>
  );
}
