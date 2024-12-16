import SearchResultCard from "./SearchResultCard"

export function SearchCard() {
    const results = [
      {
        name: "Sarah Thompson",
        age: 25,
        businessType: "Accounting & Finance",
        travelType: "Scouting Trip (1-6 weeks)",
        travelBegins: "May 2024",
        destinationCountry: "Africa",
        accommodation: "yes",
        imageUrl: "https://i.ibb.co.com/FwhwTLJ/image-2.png"
      },
      {
        name: "Sarah Thompson",
        age: 25,
        businessType: "Accounting & Finance",
        travelType: "Scouting Trip (1-6 weeks)",
        travelBegins: "May 2024",
        destinationCountry: "Africa",
        accommodation: "yes",
        imageUrl: "https://i.ibb.co.com/FwhwTLJ/image-2.png"
      },
      {
        name: "Sarah Thompson",
        age: 25,
        businessType: "Accounting & Finance",
        travelType: "Scouting Trip (1-6 weeks)",
        travelBegins: "May 2024",
        destinationCountry: "Africa",
        accommodation: "yes",
        imageUrl: "https://i.ibb.co.com/FwhwTLJ/image-2.png"
      },
      {
        name: "Sarah Thompson",
        age: 25,
        businessType: "Accounting & Finance",
        travelType: "Scouting Trip (1-6 weeks)",
        travelBegins: "May 2024",
        destinationCountry: "Africa",
        accommodation: "yes",
        imageUrl: "https://i.ibb.co.com/FwhwTLJ/image-2.png"
      }
    ]
  
    return (
      <div className="mt-[55px]">
        {results.map((result, index) => (
          <SearchResultCard key={index} {...result} />
        ))}
      </div>
    )
  }