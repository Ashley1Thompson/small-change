import '../App.css';
import { useQuery } from "@apollo/client";
import { QUERY_GOOD_DEEDS } from '../utils/queries';
import React from 'react';
import GoodDeeds from '../components/GoodDeeds';

const UserProfile = () => {
  const { loading, data } = useQuery(QUERY_GOOD_DEEDS);
  const goodDeeds = data?.goodDeeds || [];

  return (
    <section>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading Good Deeds...</div>
          ) : (
            <GoodDeeds
              goodDeeds={goodDeeds}
             
            />
          )}
        </div>
        
      </div>    
    </section>
  ); 
};

export default UserProfile;