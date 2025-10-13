import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TeamCard from "../TeamCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO",
    image: "/images/teams/team1.png",
    description: "Visionary leader driving innovation and growth.",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "CTO",
    image: "/images/teams/team2.png",
    description:
      "Leads technology, keeping us at the forefront. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
  },
  {
    id: 3,
    name: "Peter Jones",
    role: "Lead Developer",
    image: "/images/teams/team3.png",
    description: "Builds robust and scalable solutions.",
  },
  {
    id: 4,
    name: "Emily White",
    role: "Marketing Manager",
    image: "/images/teams/team4.png",
    description: "Crafts marketing strategies that resonate.",
  },
  {
    id: 5,
    name: "Emily White",
    role: "Marketing Manager",
    image: "/images/teams/team4.png",
    description: "Crafts marketing strategies that resonate.",
  },
  {
    id: 6,
    name: "Emily White",
    role: "Marketing Manager",
    image: "/images/teams/team4.png",
    description: "Crafts marketing strategies that resonate.",
  },
  {
    id: 7,
    name: "Emily White",
    role: "Marketing Manager",
    image: "/images/teams/team4.png",
    description: "Crafts marketing strategies that resonate.",
  },
];

const NextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 right-2 -translate-y-1/2 z-10 cursor-pointer text-custom-orange"
    onClick={onClick}
  >
    <ChevronRight size={28} />
  </div>
);

// Prev Arrow - custom-blue
const PrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 left-2 -translate-y-1/2 z-10 cursor-pointer text-custom-blue"
    onClick={onClick}
  >
    <ChevronLeft size={28} />
  </div>
);

const TeamSection = () => {
  const [maxHeight, setMaxHeight] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-16 relative">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-custom-blue">
          Meet Our Expert Team
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
          Dedicated professionals committed to your financial success.
        </p>
      </div>
      <Slider {...settings}>
        {teamMembers.map((member, index) => (
          <div key={member.id} className="px-3">
            <TeamCard
              member={member}
              index={index}
              maxHeight={maxHeight}
              setMaxHeight={setMaxHeight}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TeamSection;
