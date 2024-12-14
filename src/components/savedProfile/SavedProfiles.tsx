// SavedProfiles.tsx
import ProfileCard from './ProfileCard'

interface Profile {
  id: string
  name: string
  businessType: string
  travelType: string
  travelBegins: string
  destinationCountry: string
  accommodation: boolean
  image: string
}

const profiles: Profile[] = [
  {
    id: "1",
    name: "Sarah Thompson",
    businessType: "Accounting & Finance",
    travelType: "Scouting Trip (1-6 weeks)",
    travelBegins: "May 2024",
    destinationCountry: "Africa",
    accommodation: true,
    image: "https://i.ibb.co.com/FwhwTLJ/image-2.png",
  },
  // Add more profiles as needed
]

export default function SavedProfiles() {
  return (
    <div className="p-6 mt-[178px] text-[#1D293] container mx-auto">
      <h1 className="font-sans text-5xl font-semibold">
        All of your{" "}
        <span className="text-primary">saved profiles</span>
      </h1>

      <div className="space-y-4">
        {profiles.map((profile) => (
          <ProfileCard key={profile.id} profile={profile} />
        ))}
      </div>
    </div>
  )
}
