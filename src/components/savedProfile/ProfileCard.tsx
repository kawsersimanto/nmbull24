import { Heart, ArrowRight, Trash2 } from 'lucide-react'
import Image from 'next/image'

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

interface ProfileCardProps {
  profile: Profile
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profile }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
      <div className="flex gap-6">
        <div className="relative w-[479px] h-[351px]">
          <Image
            src={profile.image}
            alt={profile.name}
            layout="fill" // This ensures the image covers the entire container
            objectFit="cover" // Ensures the image maintains aspect ratio and covers the area
            className="rounded-2xl"
          />
          <button
            className="absolute top-2 right-2 p-1.5 bg-white rounded-full shadow-sm"
            aria-label="Like profile"
          >
            <Heart className="w-5 h-5 text-red-500 fill-red-500" />
          </button>
        </div>

        <div className="flex-1 space-y-4">
          <div>
            <h2 className="text-xl font-semibold">{profile.name}</h2>
            <div className="mt-4 space-y-1 text-sm">
              <div className="flex gap-2">
                <span className="text-gray-600">Business type:</span>
                <span>{profile.businessType}</span>
              </div>
              <div className="flex gap-2">
                <span className="text-gray-600">Travel type:</span>
                <span>{profile.travelType}</span>
              </div>
              <div className="flex gap-2">
                <span className="text-gray-600">Travel begins:</span>
                <span>{profile.travelBegins}</span>
              </div>
              <div className="flex gap-2">
                <span className="text-gray-600">Destination Country:</span>
                <span>{profile.destinationCountry}</span>
              </div>
              <div className="flex gap-2">
                <span className="text-gray-600">Accommodation:</span>
                <span>{profile.accommodation ? 'Yes' : 'No'}</span>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <button className="inline-flex items-center text-blue-600 hover:text-blue-700">
              See profile details
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
            <button className="inline-flex items-center text-red-600 hover:text-red-700">
              Remove here
              <Trash2 className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
