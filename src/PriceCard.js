import React,{useState} from 'react';

function PriceCard(){

    const [features] = useState([
        ""
    ])
    return(
        <div>
           <card>
               <content>
                   <Icon />
                   <planTittle></planTittle>
                   <plancost></plancost>
              {
                  features.map(item => (
                      <FeatureListItem>
                          <span>{item}</span>
                      </FeatureListItem>
                  ))
              }
              <ActionButton>button</ActionButton>

                  
               </content>
           </card>
           
        </div>
    )
}

export default PriceCard;