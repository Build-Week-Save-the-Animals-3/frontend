import React, {useState} from 'react';
import {Jumbotron, Button} from 'reactstrap';
import {Form, Input} from 'reactstrap';
import axios from 'axios';

export default function Donations(props){

    const [donation, setDonation]= useState({});

    const handleChanges= event=> {
        event.preventDefault();
        setDonation({
            ...donation,
            [event.target.name]: event.target.value});
        console.log({[event.target.name]: event.target.value});
    }

    const submitHandler= evt=> {
        evt.preventDefault();
        axios
            .post("https://ptbw-sta-3.herokuapp.com/api/donations", donation)
            .then(res => {
                setDonation(res);
                console.log(res);
            })
            .catch(err => {
                console.log('This is my error: ', err);
        })
        alert(`We have received your ${donation} donation. Thank you!`);
        document.getElementById('btn-container').reset();
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
                <Form onSubmit={submitHandler} id='btn-container' className='btn-container'>
                    <Input onClick={handleChanges} id='five' name='five-dollars' type='button' value='$5'/>
                    <Input onClick={handleChanges} id='ten' name='ten-dollars' type='button' value='$10'/>
                    <Input onClick={handleChanges} id='twenty-five' name='twenty-five-dollars' type='button' value='$25'/>
                    <Input onClick={handleChanges} id='one-hundred' name='one-hundred-dollars' type='button' value='$100'/>
                    <Input 
                    onChange={handleChanges}
                    className='input'
                    id="donation"
                    type="number"
                    name="donation amount"
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
