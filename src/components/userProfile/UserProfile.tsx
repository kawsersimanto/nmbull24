'use client'

import { DestinationView } from "./DestinationView";
import { LifeStyleView } from "./LifeStyleView";
import { MyTopView } from "./MyTopView";
import { ProfileView } from "./ProfileView";
import { TalkingPointsView } from "./TalkingPointsView";

export default function UserProfile() {

  return (
    <div className="container mx-auto mt-[130px] md:mt-[180px]">
      <ProfileView/>

     
           <DestinationView/>
           <LifeStyleView/>
           <MyTopView/>
    
   
      
          <TalkingPointsView/>

    </div>
  );
}
