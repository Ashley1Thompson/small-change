import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_GOODDEED } from '../utils/mutations';
import {QUERY_GOODDEEDS, QUERY_ME} from '../utils/queries'

const CoinFlip = () => {

const [goodDeedText, setGoodDeedText] = useState('');
const [characterCount, setCharacterCount] = useState(0);

const [addGoodDeed, { error }] = useMutation(ADD_GOODDEED, {
    // update goodDeed cahce
    update(cache, { data: { addGoodDeed }}) {
        try {
            const { goodDeeds } = cache.readQuery({ query: QUERY_GOODDEEDS});

            cache.writeQuery({
                query: QUERY_GOODDEEDS,
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


};

export default CoinFlip;