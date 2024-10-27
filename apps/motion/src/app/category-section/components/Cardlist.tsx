import React from "react";

type CardProps = {
  title: string;
  description: string;
};

const Card = ({ title, description }: CardProps) => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start bg-[#222222] shadow-lg rounded-lg overflow-hidden w-full md:w-1/2 lg:w-1/4">
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-white">{description}</p>
      </div>
    </div>
  );
};

const CardList = () => {
  const cards = [
    {
      title: "Title 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora quae ad explicabo quas sint itaque facilis, ducimus quod doloribus unde ea numquam, ipsam in pariatur? Facilis illum corrupti perspiciatis aperiam!.",
    },
    {
      title: "Title 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nostrum, perspiciatis ut ab maiores ad veniam iusto repudiandae harum accusantium labore, quis itaque minima culpa. Pariatur quis possimus labore. Dolorum.",
    },
    {
      title: "Title 3",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias pariatur fuga illo minus animi, eius eum cumque sunt et tenetur soluta tempora repellat itaque unde esse quas nisi minima totam.",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="flex center-items flex-wrap gap-4 justify-center">
        {cards.map((card, index) => (
          <Card key={index} title={card.title} description={card.description} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
