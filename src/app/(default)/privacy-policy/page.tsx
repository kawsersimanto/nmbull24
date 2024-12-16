import React from 'react';

const page = () => {
  // Function to get the day with the correct suffix (st, nd, rd, th)
  const getDayWithSuffix = (day:number) => {
    const suffixes = ["th", "st", "nd", "rd"];
    const mod10 = day % 10;
    const mod100 = day % 100;

    if (mod10 === 1 && mod100 !== 11) return `${day}${suffixes[1]}`;
    if (mod10 === 2 && mod100 !== 12) return `${day}${suffixes[2]}`;
    if (mod10 === 3 && mod100 !== 13) return `${day}${suffixes[3]}`;
    return `${day}${suffixes[0]}`;
  };

  const currentDate = new Date();
  const day = getDayWithSuffix(currentDate.getDate());
  const month = currentDate.toLocaleString("default", { month: "long" });
  const year = currentDate.getFullYear();

  const formattedDate = `${day} ${month}, ${year}`;

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-[#263238] font-sans text-[50px] text-center font-bold mt-[100px] md:mt-[150px]">
        Privacy Policy & Condition
      </h2>
      <div className="mt-20">
        {/* Privacy Policy Section */}
        <div>
          <h2 className="font-sans font-bold text-2xl md:text-3xl">
            Privacy Policy
          </h2>
          <p className="text-[18px] font-sans font-normal mt-[26px]">
            Effective as of{" "}
            <span className="text-primary font-bold">{formattedDate}</span>, we
            are committed to safeguarding the personal and safety needs of women
            using our platform. Information collected includes your name, email,
            preferences, and search activity, which is used solely to provide a
            personalized and safe experience. We ensure your data is protected
            using advanced encryption methods and comply with international
            standards for security and privacy.
          </p>
          <p className="text-[18px] font-sans font-normal mt-[26px] mb-[74px]">
            To enhance user safety, all profiles are verified, and activities on
            the platform are monitored to maintain a respectful environment.
            Users have the right to view, update, or request deletion of their
            personal information at any time. If you have concerns regarding
            your privacy or wish to manage your data, please reach out to
            expatglobalgirls@gmail.com.
          </p>
        </div>

        {/* Safety Policy Section */}
        <div>
          <h2 className="font-sans font-bold text-2xl md:text-3xl">
            Safety Policy
          </h2>
          <p className="text-[18px] font-sans font-normal mt-[26px]">
            The safety of women travelers is a cornerstone of our platform. We
            implement rigorous verification processes to ensure all profiles
            meet high safety standards. Features such as secure in-app
            messaging, reporting tools for suspicious behavior, and emergency
            contact options are available for peace of mind.
          </p>
          <p className="text-[18px] font-sans font-normal mt-[26px] mb-[74px]">
            All accommodations listed on the platform undergo a thorough review
            to meet safety requirements, including private spaces for women and
            secure entry systems. Additionally, we encourage users to leave
            reviews, promoting a transparent and trustworthy community.
          </p>
        </div>

        {/* Terms of Service Section */}
        <div>
          <h2 className="font-sans font-bold text-2xl md:text-3xl">
            Terms of Service
          </h2>
          <p className="text-[18px] font-sans font-normal mt-[26px]">
            By using our platform, you agree to abide by the terms outlined
            here. The platform is designed exclusively for women aged 18 or
            older seeking travel and shared accommodation options. Users must
            engage responsibly and respect the privacy and safety of others.
            Activities that compromise safety or violate laws will result in
            immediate suspension and possible legal action.
          </p>
          <p className="text-[18px] font-sans font-normal mt-[26px] mb-[74px]">
            You are responsible for maintaining the confidentiality of your
            login credentials. We recommend using strong passwords and updating
            them regularly to prevent unauthorized access. While we strive to
            create a secure space, the platform is not liable for issues arising
            from third-party interactions or external links.
          </p>
          <p className="text-[18px] font-sans font-normal mt-[26px] mb-[74px]">
            Regular updates may be made to these terms to align with changing
            services and legal requirements. You will be notified of significant
            changes. For questions or clarifications, contact us.
          </p>
        </div>

        {/* Community Guidelines for Women Safety Section */}
        <div>
          <h2 className="font-sans font-bold text-2xl md:text-3xl">
            Community Guidelines for Women Safety
          </h2>
          <p className="text-[18px] font-sans font-normal mt-[26px]">
            1. Verified Connections Only: Interact exclusively with verified
            profiles for added assurance.
          </p>
          <p className="text-[18px] font-sans font-normal mt-[26px]">
            2. Stay In-App: Use in-app communication features to maintain secure
            and documented conversations.
          </p>
          <p className="text-[18px] font-sans font-normal mt-[26px]">
            3. Transparency: Be honest about your preferences and expectations
            while using the platform.
          </p>
          <p className="text-[18px] font-sans font-normal mt-[26px] mb-[74px]">
            4. Accommodation Safety: Check reviews and confirm safety measures
            before booking.
          </p>
        </div>

        {/* Your Rights Section */}
        <div>
          <h2 className="font-sans font-bold text-2xl md:text-3xl mt-[26px]">
            Your Rights
          </h2>
          <p className="text-[18px] font-sans font-normal mt-[26px]">
            Women using this platform have the right to privacy, respect, and
            safety. If at any time you feel these rights are compromised,
            contact our dedicated support team at expatglobalgirls@gmail.com. We
            are here to ensure a safe, secure, and empowering experience for all
            users.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
