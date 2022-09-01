// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useMutation } from '@apollo/client';

// import { ADD_GOOD_DEED } from '../utils/mutations';
// import {QUERY_GOOD_DEEDS, QUERY_ME} from '../utils/queries';

// import Auth from '../utils/auth';

// class Coin extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       result: "doing",
//     };
//     this.coinFlip = this.coinFlip.bind(this);
//   }

//   coinFlip() {
//     this.setState({}, () => {
//       this.setState({ result: "done" });
//       console.log("done");
//     });
//     const [goodDeedText, setGoodDeedText] = useState("");
//     const [addGoodDeed, { error }] = useMutation(ADD_GOOD_DEED, {
//       update(cache, { data: { addGoodDeed } }) {
//         try {
//           const { goodDeeds } = cache.readQuery({ query: QUERY_GOOD_DEEDS });

//           cache.writeQuery({
//             query: QUERY_GOOD_DEEDS,
//             data: { goodDeeds: [addGoodDeed, ...goodDeeds] },
//           });
//         } catch (e) {
//           console.error(e);
//         }

//         const { me } = cache.readQuery({ query: QUERY_ME });
//         cache.writeQuery({
//           query: QUERY_ME,
//           data: { me: { ...me, goodDeeds: [...me.goodDeeds, addGoodDeed] } },
//         });
//       },
//     });

//     const handleFormSubmit = async (event) => {
//       event.preventDefault();

//       try {
//         const { data} = await addGoodDeed({
//           variables: {
//             goodDeedText,
//             gooddeedAuthor: Auth.getProfile().data.username,
//           }
//         });

//         setGoodDeedText('');
//       } catch (err) {
//         console.error(err);
//       }
//     };
    
//     const handleChange = (event) => {
//         const { name, value } = event.target;
    
//         if (name === 'thoughtText' && value.length <= 280) {
//           setThoughtText(value);
//           setCharacterCount(value.length);
//         }
//       };

//     return (
//       <div className="Coin">
//         <div id="coin" className={this.state.result}>
//           <div class="side-a">
//             <h2>Deed Done.</h2>
//           </div>
//           <div className="side-b">
//             <h2>Deed Needs Doin'</h2>
//           </div>
//         </div>
//         <h1>
//           Be the (Small) Change You
//           <br /> Want to See in the World
//         </h1>
//         {/* Auth.loggedIn() ? ( */}
//             <form className='' onSubmit={handleFormSubmit}>
              
//               {/* input div */}
//               <div className=''>
//                 <textarea
//                     name='goodDeedText'
//                     placeholder="What good deed did you accomplish today?"
//                     value={goodDeedText}
//                     className=''
//                     onChange={handleChange}
//                     ></textarea>
//                 </div> 

//                 {/* button div */}
//                 <div className="">
//                 <button className="" type="submit">
//                 Flip Coin
//                 </button>
//                 </div>

//             </form>
//         {/*  ) : (
//              <p>
//                You need to be logged in to share your good deed for the day. Please{' '}
//                <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
//              </p>
//            ) */}
//         <br />
//         <br />
//         <button id="btn " onClick={this.coinFlip}>
//           Log Your Good Deed for the Day
//         </button>
//       </div>
//     );
  
// }
// }
// export default Coin;

