import React from 'react';
import Card from './card';

function App() {
  let priceData = [
    {
      plan:"FREE",
      currency:"$",
      price : "0",
      period : "month",
      offers : [
        {
          name: "Single User"
        },
        {
          name: "5GB Storage"
        },
        {
          name: "Unlimited Public Projects"
        },
        {
          name: "Community Access"
        },
        {
          name:"Unlimited Private Projects"
        },
        {
          name:"Dedicated Phone Support"
        },
        {
          name:"Free Subdomain"
        },
        {
          name:"Monthly Status Reports"
        }

        
      ]
      
    },
    {

    },
    {

    }
  ]
  return (
    <>
    <section class="pricing py-5">
  <div class="container">
    <div class="row">
    <Card />
  
     
  </div>
  </div>
</section>
    


  
    </>
  );
}

export default App;
