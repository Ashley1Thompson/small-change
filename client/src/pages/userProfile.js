import '../App.css';
import { useQuery } from "@apollo/client";
import { QUERY_GOOD_DEEDS } from '../utils/queries';
import React, { Component } from 'react';

const UserProfile = () => {
  const { loading, data } = useQuery(QUERY_GOOD_DEEDS);
  const goodDeeds = data?.goodDeeds || [];
  
  return (
    <>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          deeds display here
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <Component
              goodDeeds={goodDeeds}
              title="Your Deeds"
            />
          )}
        </div>
      </div>    
    </>
  ); 
};

export default UserProfile;