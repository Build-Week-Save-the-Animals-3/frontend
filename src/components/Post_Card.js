import React from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

export default function Post_Card() {


    return (
        <div className='postCard-container'>
            Post a New Campaign
            <Form className='post-card'>
                <FormGroup>
                    <Label htmlFor='title'>Campaign Title</Label> 
                    <Input type='text' placeholder='Enter campaign name' name='title' id='title' />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='description'>Purpose</Label> 
                    <Input type='textarea' name='description' id='description' />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='urgency'>Urgency</Label> 
                    <Input type='select' name='urgency' id='urgency'>
                    <option>Critical</option>
                    <option>Medium</option>
                    <option>Low</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='location'>Location</Label> 
                    <Input type='text' name='location' id='location' />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='deadline'>Dead-line</Label> 
                    <Input type='date' name='deadline' id='deadline' />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='fund_goal'>Fund Goal $</Label> 
                    <Input type='number' min="1" step='5'
                    max="100000"  name='fund_goal' id='fund_goal' />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='complete'>Fund Met</Label> 
                    <Input type='checkbox'
                    name='complete' id='complete' />
                </FormGroup>
                <div className='btnpost'>
                    <Button className='submit-post' type='submit'>Post Campaign</Button>
                </div>
            </Form>
        </div>
    )
}
