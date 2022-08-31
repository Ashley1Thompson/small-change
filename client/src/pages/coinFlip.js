import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_GOOD_DEED } from '../utils/mutations';
import {QUERY_GOOD_DEEDS, QUERY_ME} from '../utils/queries';

import penny from '../assets/2022-lincoln-penny-uncirculated-obverse-philadelphia-300x300.jpeg';

const CoinFlip = () => {

const [goodDeedText, setGoodDeedText] = useState('');
const [characterCount, setCharacterCount] = useState(0);

const [addGoodDeed, { error }] = useMutation(ADD_GOOD_DEED, {
    // update goodDeed cahce
    update(cache, { data: { addGoodDeed }}) {
        try {
            const { goodDeeds } = cache.readQuery({ query: QUERY_GOOD_DEEDS});

            cache.writeQuery({
                query: QUERY_GOOD_DEEDS,
                data: { goodDeeds: [addGoodDeed, ...goodDeeds] },
            });
        }catch (e) {
            console.error(e);
        }

        // update me object's cache
        const { me } = cache.readQuery({ query: QUERY_ME });
        cache.writeQuery({
            query: QUERY_ME,
            data: { me: { ...me, goodDeeds: [...me.goodDeeds, addGoodDeed]}},
        });
    },
});

const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
        const { data } = await addGoodDeed({
            variables: {
                goodDeedText,
                goodDeedAuthor: Auth.getProfile().data.username
            }
        });

        setGoodDeedText('');
    }   catch (err) {
        console.error(err);
    }
};

const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'goodDeedText' && value.length <= 280) {
        setGoodDeedText(value);
        setCharacterCount(value.length);
    }
};

return (

<div>
    {/* placeholder image for coin flip animation */}
    <img className='' src={penny} alt='enlarged penny' />
    {
        // Auth.loggedIn() ? (
            <form className='' onSubmit={handleFormSubmit}>
              
              {/* input div */}
              <div className=''>
                <textarea
                    name='goodDeedText'
                    placeholder="What good deed did you accomplish today?"
                    value={goodDeedText}
                    className=''
                    onChange={handleChange}
                    ></textarea>
                </div> 

                {/* button div */}
                <div className="">
                <button className="" type="submit">
                Flip Coin
                </button>
                </div>

            </form>
        // ) : (
        //     <p>
        //       You need to be logged in to share your good deed for the day. Please{' '}
        //       <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        //     </p>
        //   )
    }
</div>

);
};

export default CoinFlip;