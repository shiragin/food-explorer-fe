import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AdvancedSearch from './AdvansedSearch';
import BasicSearch from './BasicSearch';
import '../../scss/Search.scss';
import axios from 'axios';

export default function Search() {
    const [name, setName] = useState("");
    const [type, setType] = useState("")
    const onSearch = async () => {
        const res = await axios.post(
            "http://localhost:8080/countries", { name, type }
        )

    }

    return (
        <>
            <div className='page-title'>Find your next favourite meal</div>
            <Form>
                <BasicSearch name={name} setName={setName} />
                <AdvancedSearch type={type} setType={setType} />

                <Button
                    variant='primary'
                    type='button'
                    className='search-button'
                    onClick={onSearch}
                >
                    Search
                </Button>
            </Form>
        </>
    )
}