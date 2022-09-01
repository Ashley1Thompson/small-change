import React from 'react';
import { Link } from 'react-router-dom';

const GoodDeeds = ({
 goodDeeds,
 title,
 showTitle = true,
 showUsername = true,
}) => {
  // if (!goodDeeds.length) {
  //   return <h3>No Good Deeds Yet</h3>;
  // }
// console.log(props)
  return (
    <div>
      
      {goodDeeds &&
        goodDeeds.map((goodDeed) => (
          <div key={goodDeed._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {showUsername ? (
                 <Link
                 className="text-light"
                 to={`/userProfile`}
               >
                 {goodDeed.goodDeedAuthor} <br />
                 <span style={{ fontSize: '1rem' }}>
                   had this thought on {goodDeed.createdAt}
                 </span>
               </Link>
              ) : (
                <>
                  <span style={{ fontSize: '1rem' }}>
                    You had shared this good deed on {goodDeed.createdAt}
                  </span>
                </>
              )}
            </h4>
            <div className="card-body bg-light p-2">
              <p>{goodDeed.goodDeedText}</p>
            </div>
          </div>
        ))}
        {/* <h1>
          {props.goodDeed.goodDeedText}
          {props.goodDeed.goodDeedAuthor}
        </h1> */}
    </div>
  );
};

export default GoodDeeds;