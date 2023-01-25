import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AdvancedSearch from './AdvansedSearch';
import BasicSearch from './BasicSearch';
import '../../scss/Search.scss';

export default function Search() {
  const onSearch = async () => {
    console.log('HHHHH');
  };

  return (
    <div className='container search-container'>
      <div className='page-title'>Find your next favourite meal</div>
      <Form>
        <BasicSearch />
        <AdvancedSearch />

        <Button
          variant='primary'
          type='button'
          className='search-button'
          onClick={onSearch}
        >
          Search
        </Button>
      </Form>
    </div>
  );
}
