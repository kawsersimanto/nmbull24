import React from 'react';
import Link from "next/link";
import { useLifStyleMyQuery } from '@/redux/Api/lifeCicleApi';

type LifestyleData = {
  id: string;
  monthlyBudget: number;
  maritalStatus: string;
  ethnicity: string;
  religion: string;
  children: string;
  pets: string;
  education: string;
  employmentStatus: string;
  haveBusiness: boolean;
  industry: string;
  companyName: string;
  serviceDes: string;
  facebook: string;
  instagram: string;
  youtube: string;
  linkedin: string;
  website: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
};

export const LifeStyleView: React.FC = () => {
  const { data: lifestyleMyd, isLoading, isError } = useLifStyleMyQuery(undefined);
  const lifestyleMy=lifestyleMyd?.data

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading lifestyle data.</div>;

  return (
    <div>
      {/* Lifestyle Section */}
      <section className="mt-16">
        <h2 className="text-xl font-semibold mb-6">Lifestyle</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          <div className="col-span-1">
            <h3 className="text-[#344054] font-sans font-semibold text-[18px] leading-[22.32px] mb-1">
              Max Monthly Rent
            </h3>
            <p className="text-[#475467] font-sans text-[18px] font-normal leading-[30px]">
              ${lifestyleMy?.monthlyBudget || "N/A"}
            </p>
          </div>
          <div className="col-span-1">
            <h3 className="text-[#344054] font-sans font-semibold text-[18px] leading-[22.32px] mb-1">
              Marital Status
            </h3>
            <p className="text-[#475467] font-sans text-[18px] font-normal leading-[30px]">
              {lifestyleMy?.maritalStatus || "N/A"}
            </p>
          </div>
          <div className="col-span-1">
            <h3 className="text-[#344054] font-sans font-semibold text-[18px] leading-[22.32px] mb-1">
              Ethnicity
            </h3>
            <p className="text-[#475467] font-sans text-[18px] font-normal leading-[30px]">
              {lifestyleMy?.ethnicity || "N/A"}
            </p>
          </div>
          <div className="col-span-1">
            <h3 className="text-[#344054] font-sans font-semibold text-[18px] leading-[22.32px] mb-1">
              Religion/Spirituality
            </h3>
            <p className="text-[#475467] font-sans text-[18px] font-normal leading-[30px]">
              {lifestyleMy?.religion || "N/A"}
            </p>
          </div>
          <div className="col-span-1">
            <h3 className="text-[#344054] font-sans font-semibold text-[18px] leading-[22.32px] mb-1">
              Children
            </h3>
            <p className="text-[#475467] font-sans text-[18px] font-normal leading-[30px]">
              {lifestyleMy?.children || "N/A"}
            </p>
          </div>
          <div className="col-span-1">
            <h3 className="text-[#344054] font-sans font-semibold text-[18px] leading-[22.32px] mb-1">
              Pets
            </h3>
            <p className="text-[#475467] font-sans text-[18px] font-normal leading-[30px]">
              {lifestyleMy?.pets || "N/A"}
            </p>
          </div>
          <div className="col-span-1">
            <h3 className="text-[#344054] font-sans font-semibold text-[18px] leading-[22.32px] mb-1">
              Employment Status
            </h3>
            <p className="text-[#475467] font-sans text-[18px] font-normal leading-[30px]">
              {lifestyleMy?.employmentStatus || "N/A"}
            </p>
          </div>
          <div className="col-span-1">
            <h3 className="text-[#344054] font-sans font-semibold text-[18px] leading-[22.32px] mb-1">
              Education
            </h3>
            <p className="text-[#475467] font-sans text-[18px] font-normal leading-[30px]">
              {lifestyleMy?.education || "N/A"}
            </p>
          </div>
        </div>
      </section>

      {/* My Business Section */}
      {lifestyleMy?.haveBusiness && (
        <section className="mt-16">
          <h2 className="text-xl font-semibold mb-6">My Business</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
            <div className="col-span-1">
              <h3 className="text-[#344054] font-sans font-semibold text-[18px] leading-[22.32px] mb-1">
                Industry
              </h3>
              <p className="text-[#475467] font-sans text-[18px] font-normal leading-[30px]">
                {lifestyleMy?.industry || "N/A"}
              </p>
            </div>
            <div className="col-span-1">
              <h3 className="text-[#344054] font-sans font-semibold text-[18px] leading-[22.32px] mb-1">
                Company Name
              </h3>
              <p className="text-[#475467] font-sans text-[18px] font-normal leading-[30px]">
                {lifestyleMy?.companyName || "N/A"}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Description of Services Section */}
      <section className="mt-16">
        <h2 className="text-xl font-semibold mb-6">Description of Services</h2>
        <textarea
          placeholder="Please share here.."
          value={lifestyleMy?.serviceDes || ""}
          readOnly
          className="w-full min-h-[120px] p-3 bg-gray-100 border border-gray-300 rounded-lg text-[#475467] font-sans text-[16px] resize-none focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </section>

      {/* Social Media Links */}
      <section className="mt-16">
        <h2 className="text-[18px] font-semibold mb-3 font-sans">
          Visit us online
        </h2>
        <div className="flex flex-row">
          {lifestyleMy?.facebook && (
            <Link href={lifestyleMy.facebook} target="_blank" rel="noopener noreferrer">
              <span className="mr-[55px] cursor-pointer underline text-primary font-sans font-medium text-[18px]">
                Facebook
              </span>
            </Link>
          )}
          {lifestyleMy?.youtube && (
            <Link href={lifestyleMy.youtube} target="_blank" rel="noopener noreferrer">
              <span className="mr-[55px] cursor-pointer underline text-primary font-sans font-medium text-[18px]">
                Youtube
              </span>
            </Link>
          )}
          {lifestyleMy?.linkedin && (
            <Link href={lifestyleMy.linkedin} target="_blank" rel="noopener noreferrer">
              <span className="mr-[55px] cursor-pointer underline text-primary font-sans font-medium text-[18px]">
                Linkedin
              </span>
            </Link>
          )}
        </div>
        <div className="mt-6">
          {lifestyleMy?.instagram && (
            <Link href={lifestyleMy.instagram} target="_blank" rel="noopener noreferrer">
              <span className="mr-[55px] cursor-pointer underline text-primary font-sans font-medium text-[18px]">
                Instagram
              </span>
            </Link>
          )}
          {lifestyleMy?.website && (
            <Link href={lifestyleMy.website} target="_blank" rel="noopener noreferrer">
              <span className="mr-[55px] cursor-pointer underline text-primary font-sans font-medium text-[18px]">
                Website
              </span>
            </Link>
          )}
        </div>
      </section>
    </div>
  );
};

