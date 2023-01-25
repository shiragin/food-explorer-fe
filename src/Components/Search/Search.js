import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AdvancedSearch from "./AdvansedSearch";
import BasicSearch from "./BasicSearch";
import axios from "axios";


export default function Search() {
    const [name, setName] = useState("");
    const [type, setType] = useState({
        type: ""
    });
    const onSearch = async () => {
        const res = await axios.post(
            "http://localhost:8080/countries", { name, type }
        )

    }

    return (
        <div className='container seach-container'>
            <span>Cousine search</span>
            <Form>
                <BasicSearch name={name} setName={setName} />
                <AdvancedSearch type={type} setType={setType} />
                <Button variant="primary" type="button" onClick={onSearch}>
                    Search
                </Button>
            </Form>
        </div>
    )
}