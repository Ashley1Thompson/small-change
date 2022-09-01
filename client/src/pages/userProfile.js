import '../App.css';
import { useQuery } from "@apollo/client";
import { QUERY_GOOD_DEEDS } from '../utils/queries';
import React, { div } from 'react';
import { Navigate } from "react-router-dom";
import Auth from '../utils/auth'


const UserProfile = () => {
  const { loading, data } = useQuery(QUERY_GOOD_DEEDS);
  const goodDeeds = data?.goodDeeds || [];
  
  if (!Auth.loggedIn()) {
    return <Navigate replace to="/" />;
  } else {
  return (
    <section>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #ffffff' }}
        >
          deeds display here
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading Good Deeds...</div>
          ) : (
            <div
              goodDeeds={goodDeeds}
              title="It feels good to do good."
            ></div>
          )}
        </div>
      </div>    
    </section>
  ); 
};
};

export default UserProfile;