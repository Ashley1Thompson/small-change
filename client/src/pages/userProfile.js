import '../App.css';
import { useQuery } from "@apollo/client";
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import GoodDeeds from '../components/GoodDeeds';

import Auth from '../utils/auth';

const UserProfile = () => {
  const {username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};

  // navigate to login page page if user is not signed in
  if (!Auth.loggedIn()) {
    return <Navigate replace to="/" />;
  } else {
  // const { loading, data } = useQuery(QUERY_GOOD_DEEDS);
  // const { userLoading, userData } = useQuery(QUERY_ME);
  // const goodDeeds = data?.goodDeeds || [];

  // const user = userData?.me || userData?.user || {};
  // const filterDeeds = goodDeeds.filter((goodDeed) => {
  //   // goodDeed.goodDeedAuthor === user.username
  // })
  // console.log(goodDeeds)
  // console.log(userData)
  return (
    <section>
      <div className="flex-row justify-center">
      <div className="col-12 col-md-10 mb-5">
          <GoodDeeds
            goodDeeds={user.goodDeeds}
            showUsername={false}
          />
        </div>
        {/* <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading Good Deeds...</div>
          ) : (
            goodDeeds.map((goodDeed) => {
              return(<GoodDeeds goodDeed={goodDeed} />)
            })
          )}
        </div> */}
        
      </div>    
    </section>
  ); 
};
}

export default UserProfile;