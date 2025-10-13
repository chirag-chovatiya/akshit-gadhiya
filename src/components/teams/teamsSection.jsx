import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TeamCard from "../TeamCard";

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
];

const TeamSection = () => {
  const [maxHeight, setMaxHeight] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    arrows: true,
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold text-center mb-12 text-yellow-500">
        Meet Our Expert Team
      </h2>

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
