import "../App.css";
import { useQuery } from "@apollo/client";
import { QUERY_GOOD_DEEDS, QUERY_ME } from "../utils/queries";
import React from "react";
import GoodDeeds from "../components/GoodDeeds";

const UserProfile = () => {
  const { loading, data } = useQuery(QUERY_GOOD_DEEDS);
  const { userLoading, userData } = useQuery(QUERY_ME);
  const goodDeeds = data?.goodDeeds || [];

  const user = userData?.me || userData?.user || {};
  const filterDeeds = goodDeeds.filter((goodDeed) => {
    // goodDeed.goodDeedAuthor === user.username
  });
  console.log(goodDeeds);
  console.log(userData);
  return (
    <section>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading Good Deeds...</div>
          ) : (
            goodDeeds.map((goodDeed) => {
              return <GoodDeeds goodDeed={goodDeed} />;
            })
          )}
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
