import React from 'react';

const goodDeeds = (
 props
) => {
  // if (!goodDeeds.length) {
  //   return <h3>No Good Deeds Yet</h3>;
  // }
console.log(props)
  return (
    <div>
      {/* {showText && <h3>{goodDeedtext}</h3>}
      {goodDeeds &&
        goodDeeds.map((goodDeed) => (
          <div key={goodDeed._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {showUsername ? (
                <div>
                  You did this goodDeed on {goodDeed.createdAt}
                </div>
              ) : (
                <>
                  <span style={{ fontSize: '1rem' }}>
                    You had this goodDeed on {goodDeed.createdAt}
                  </span>
                </>
              )}
            </h4>
            <div className="card-body bg-light p-2">
              <p>{goodDeed.goodDeedText}</p>
            </div>
          </div>
        ))} */}
        <h1>
          {props.goodDeed.goodDeedText}
          {props.goodDeed.goodDeedAuthor}
        </h1>
    </div>
  );
};

export default goodDeeds;