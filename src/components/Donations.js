import React, {useState} from 'react';
import {Jumbotron, Button} from 'reactstrap';
import {Form, Input} from 'reactstrap';
import axios from 'axios';

export default function Donations(props){

    const [donation, setDonation]= useState('');

    const handleChanges= event=> {
        event.preventDefault();
        setDonation({[event.target.id]: event.target.value});
        console.log({[event.target.id]: event.target.value});
    }

    const submitHandler= evt=> {
        evt.preventDefault();
    }

    return (
        <div className='donation-pg'>
            <section>
                <Jumbotron className='big'>
                    <h2>Help Hope Stay Alive!</h2>
                    <p>With a kind donation you can help empower this organization</p>
                </Jumbotron>
            </section>
            <section className='donations-container'>
                Donate Now
                <Form onSubmit={submitHandler} className='btn-container'>
                    <Input onClick={handleChanges} id='five' name='five' type='button' value='$5'/>
                    <Input onClick={handleChanges} id='ten' name='ten' type='button' value='$10'/>
                    <Input onClick={handleChanges} id='twenty-five' name='twenty-five' type='button' value='$25'/>
                    <Input onClick={handleChanges} id='one-hundred' name='one-hundred' type='button' value='$100'/>
                    <Input 
                    onChange={handleChanges}
                    className='input'
                    id="donation"
                    type="number"
                    name="donation"
                    min="0" 
                    max="100000" 
                    step="5"
                    placeholder='$ Other amount'
                    />
                    <Button type='submit' className='donate-btn'>Donate</Button>
                </Form>
            </section>
        </div>
    )
}
