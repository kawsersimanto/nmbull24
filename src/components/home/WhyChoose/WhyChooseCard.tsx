import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Move, UserCheck, UserIcon } from 'lucide-react';
import Image from 'next/image';

// Define types for the individual card feature properties
interface FeatureCardProps {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
}

export const WhyChooseCard = () => {
  const AffordableHousingCard: FeatureCardProps = {
    icon: DollarSign,
    title: "Affordable Housing",
    description: "Save money and travel smarter by sharing accommodations with fellow members."
  };

  const FlexibleOptionsCard: FeatureCardProps = {
    icon: Move,
    title: "Flexible Options",
    description: "From memberships to travel & lifestyle preferences – you have the power to choose."
  };

  const VerifiedProfilesCard: FeatureCardProps = {
    icon: UserCheck,
    title: "Verified Profiles",
    description: "A reliable community with verified profiles for added safety and peace of mind."
  };

  const WomenOnlySpacesCard: FeatureCardProps = {
    icon: UserIcon,
    title: "Women-Only Spaces",
    description: "Safe, supportive spaces for women to connect and thrive period."
  };

  // Render the cards individually
  return (
    <div className='mt-16 font-sans'>
      <div className="grid md:grid-cols-2 gap-24 max-w-5xl mx-auto relative">
        <Card key="affordable-housing" className="rounded-br-[50px] border shadow-sm">
          <CardContent className="pt-6">
            <div className=" items-start">
              <div className="rounded-sm bg-slate-100 inline-block  p-2">
                <AffordableHousingCard.icon className="w-6 h-6 text-blue-600" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-semibold">{AffordableHousingCard.title}</h3>
                <p className="text-muted-foreground">
                  {AffordableHousingCard.description}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card key="flexible-options"  className="rounded-bl-[50px] border shadow-sm">
          <CardContent className="pt-6">
            <div className="items-start">
            <div className="rounded-sm bg-slate-100 inline-block  p-2">
                <FlexibleOptionsCard.icon className="w-6 h-6 text-blue-600" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-semibold">{FlexibleOptionsCard.title}</h3>
                <p className="text-muted-foreground">
                  {FlexibleOptionsCard.description}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card key="verified-profiles"  className="rounded-tr-[50px] border shadow-sm">
          <CardContent className="pt-6">
            <div className="  items-start">
            <div className="rounded-sm bg-slate-100 inline-block  p-2">
                <VerifiedProfilesCard.icon className="w-6 h-6 text-blue-600" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-semibold">{VerifiedProfilesCard.title}</h3>
                <p className="text-muted-foreground">
                  {VerifiedProfilesCard.description}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card key="women-only-spaces"  className="rounded-tl-[50px] border shadow-sm">
          <CardContent className="pt-6">
            <div className="items-start">
            <div className="rounded-sm bg-slate-100 inline-block  p-2">
                <WomenOnlySpacesCard.icon className="w-6 h-6 text-blue-600" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-semibold">{WomenOnlySpacesCard.title}</h3>
                <p className="text-muted-foreground">
                  {WomenOnlySpacesCard.description}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Center Logo */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 hidden md:block">
          <Image
            src="/placeholder.svg"
            alt="Expat Global Girls Logo"
            width={80}
            height={80}
            className="w-full h-full object-contain"
          />
        </div>
      </div>

     
      
    </div>
  );
};
