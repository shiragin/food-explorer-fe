import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Switch from "../Switch/Switch";
import AdvancedSearch from "./AdvansedSearch";
import BasicSearch from "./BasicSearch";

export default function Search() {
   
    const onSearch = async () => {
        console.log("HHHHH");
    }
    
    return(
        <div className='container seach-container'>
                <span>Cousine search</span>
                <Form>
                    <BasicSearch />
                    <AdvancedSearch/>
                    
                <Button variant="primary" type="button" onClick={onSearch}>
                    Search
                </Button>
            </Form>
        </div>
    )
}