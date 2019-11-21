import React from 'react';

// const Full = (props) => {
//   return (
//     <div>
//       <h1 className="display-3 text-center">Welcome to Crouton-Builder!</h1>
//       <p className="lead text-center">A UI for building your chroots</p>
//       <hr className="my-2" />
//       <p className="lead">
//         <p className="lead">Choose a preset...</p>
//         <Container fluid>
//           <Row>
//             {prebuilts.slice(0, 3).map(item =>
//               <PrebuiltCard
//                 name={item.name}
//                 img={item.img}
//                 desc={item.desc}>
//               </PrebuiltCard>)}
//           </Row>
//         </Container>
//         <a className="text-right">See more</a>
//       </p>
//       <br></br>
//       <hr className="my-2" />
//       <p className="lead text-center">
//         <p>or</p>
//         <Button>Build Your Own!</Button>
//       </p>
//     </div>
//   );
// };

const Welcome = () => (
  <div>
    <h1 className="display-3 text-center">Welcome to Crouton-Builder!</h1>
    <p className="lead text-center">A UI for building your chroots</p>
    <hr className="my-2" />
    <p className="lead"></p>
  </div>
)



export default Welcome;