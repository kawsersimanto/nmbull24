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

      <section className="mt-12">
        <div>
          <div className="mb-6">
            <h3 className="font-semibold text-[16px] sm:text-[18px] mb-3 text-[#344054]">
              Are you willing to provide/exchange screening reports to a
              potential housemate? (e.g., Background check, Credit check, Tenant
              history)
            </h3>
            <p className="text-[16px] sm:text-[18px] text-[#475467] font-normal mb-7">
              Yes
            </p>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold text-[16px] sm:text-[18px] mb-3 text-[#344054]">
              Are you open to having conversations regarding health matters
              (physical, mental)?
            </h3>
            <p className="text-[16px] sm:text-[18px] text-[#475467] font-normal">
              Yes
            </p>
          </div>
        </div>

        <div>
          <div className="mb-6">
            <label className="block text-gray-800 font-semibold mb-2 text-[16px] sm:text-[18px]">
              How would you describe your Religious/Spiritual beliefs and
              practices?
            </label>
            <textarea
              placeholder="Please share here..."
              className="w-full min-h-[120px] p-3 bg-gray-100 border placeholder:text-[#98A2B3] placeholder:text-xl placeholder:font-normal border-gray-300 rounded-lg text-[#475467] text-[16px] resize-none focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-800 font-semibold mb-2 text-[16px] sm:text-[18px]">
              Do you have any allergies? If so, please list them here: Ex.,
              Airborne allergens, Foods, Nuts, Latex, Pets/Animals, Insects,
              etc.
            </label>
            <textarea
              placeholder="Please share here..."
              className="w-full min-h-[120px] p-3 bg-gray-100 border border-gray-300 rounded-lg text-[#475467] text-[16px] resize-none focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-gray-800 font-semibold mb-2 text-[16px] sm:text-[18px]">
              Anything Else?
            </label>
            <textarea
              placeholder="Feel free to share any additional information about yourself, including any: must-haves, deal-breakers, etc."
              className="w-full min-h-[120px] p-3 bg-white border placeholder:text-[#98A2B3] border-gray-300 rounded-lg text-[#475467] text-[16px] resize-none focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
