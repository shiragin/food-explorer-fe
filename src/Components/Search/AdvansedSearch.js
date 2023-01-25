import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

export default function AdvancedSearch({ type, setType }) {
  const [isAdvancedSearch, setIsAdvancedSearch] = useState(false);
  const onSearchTypeChange = () => {
    setIsAdvancedSearch(!isAdvancedSearch);
  };
  return (
    <Form>
      <Form.Group className='mb-3 mt-3' controlId='formBasicCheckbox'>
        <Form.Check
          onChange={onSearchTypeChange}
          value={isAdvancedSearch}
          type='checkbox'
          label='Advanced search'
        />
      </Form.Group>
      {isAdvancedSearch && (
        <div>
          <Form.Label>Search by culture</Form.Label>
          <Form.Select
            htmlSize='5'
            aria-label='Search'
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value={'US'}>American</option>
            <option value={'GB'}>British</option>
            <option value={'CA'}>Canadian</option>
            <option value={'CN'}>Chinese</option>
            <option value={'HR'}>Croatian</option>
            <option value={'NL'}>Dutch</option>
            <option value={'EG'}>Egyptian</option>
            <option value={'FR'}>French</option>
            <option value={'GR'}>Greek</option>
            <option value={'IN'}>Indian</option>
            <option value={'IE'}>Irish</option>
            <option value={'IT'}>Italian</option>
            <option value={'JM'}>Jamaican</option>
            <option value={'JP'}>Japanese</option>
            <option value={'KE'}>Kenyan</option>
            <option value={'MY'}>Malaysian</option>
            <option value={'MX'}>Mexican</option>
            <option value={'MA'}>Moroccan</option>
            <option value={'PL'}>Polish</option>
            <option value={'PT'}>Portuguese</option>
            <option value={'RU'}>Russian</option>
            <option value={'ES'}>Spanish</option>
            <option value={'TH'}>Thai</option>
            <option value={'TN'}>Tunisian</option>
            <option value={'TR'}>Turkish</option>
            <option value={'VN'}>Vietnamese</option>
          </Form.Select>
        </div>
      )}
    </Form>
  );
}
