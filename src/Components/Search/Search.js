import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AdvancedSearch from "./AdvansedSearch";
import BasicSearch from "./BasicSearch";
import axios from "axios";


export default function Search() {

    const onSearch = async () => {
        const res = await axios.get(
            "http://localhost:8080/countries"
        )
    }

    return (
        <div className='container seach-container'>
            <span>Cousine search</span>
            <Form>
                <BasicSearch />
                <AdvancedSearch />
                <Button variant="primary" type="button" onClick={onSearch}>
                    Search
                </Button>
            </Form>
        </div>
    )
}