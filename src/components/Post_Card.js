import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

export default function Post_Card() {

    const goal= 0;

    const [newCard, setNewCard]= useState({
        id: '',
        title: '',
        description: '',
        urgency_level: '',
        location: '',
        deadline: '',
        fund_goal: goal,
        completed: false,

    });

    const handleChanges= evt=> {
        evt.preventDefault();
        setNewCard({
            ...newCard,
            [evt.target.name]: evt.target.value});
        console.log({[evt.target.name]: evt.target.value});
    }
    const handleChange= evt=> {
        evt.preventDefault();
        setNewCard({
            ...newCard,
            [evt.target.name]: evt.target.checked});
        console.log({[evt.target.name]: evt.target.checked});
    }

    const submitHandler= evt=> {
        evt.preventDefault();
        alert('We have received your donation. Thank you!');
        document.getElementById('post-card').reset();
    }

    return (
        <div className='postCard-container'>
            Post a New Campaign
            <Form onSubmit={submitHandler} id='post-card' className='post-card'>
                <FormGroup>
                    <Label htmlFor='title'>Campaign Title</Label> 
                    <Input onChange={handleChanges} type='text' placeholder='Enter campaign name' name='title' id='title' />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='description'>Purpose</Label> 
                    <Input onChange={handleChanges} type='textarea' name='description' id='description' />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='urgency_level'>Urgency</Label> 
                    <Input onChange={handleChanges} type='select' name='urgency_level' id='urgency_level'>
                    <option>Critical</option>
                    <option>Medium</option>
                    <option>Low</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='location'>Location</Label> 
                    <Input onChange={handleChanges} type='text' name='location' id='location' />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='deadline'>Dead-line</Label> 
                    <Input onChange={handleChanges} type='date' name='deadline' id='deadline' />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='fund_goal'>Fund Goal $</Label> 
                    <Input onChange={handleChanges} type='number' min="1" step='5'
                    max="100000"  name='fund_goal' id='fund_goal' />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='completed'>Fund Met</Label> 
                    <Input onChange={handleChange} type='checkbox'
                    name='completed' id='completed' />
                </FormGroup>
                <div className='btnpost'>
                    <Button className='submit-post' type='submit'>Post Campaign</Button>
                </div>
            </Form>
        </div>
    )
}
