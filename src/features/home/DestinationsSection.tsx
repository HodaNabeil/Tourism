const destinations = [
  {
    title: "Thai Island Jungle",
    guide: "Jason Andrews",
    description:
      "Lorem ipsum dolor sit amet, consectetur iscing elit. Etiam fermentum nulla ac tincidunt. Sed volutpat semper elit quis.",
  },
  {
    title: "Kayaking Thailand",
    guide: "Jessie Howard",
    description:
      "Lorem ipsum dolor sit amet, consectetur iscing elit. Etiam fermentum nulla ac tincidunt. Sed volutpat semper elit quis.",
  },
  {
    title: "Niagara Falls",
    guide: "Steven Clark",
    description:
      "Lorem ipsum dolor sit amet, consectetur iscing elit. Etiam fermentum nulla ac tincidunt. Sed volutpat semper elit quis.",
  },
];

export default function DestinationsSection() {
  return (
    <section className=" bg-gray-100 text-gray-800">
      <div className="grid gap-6 md:grid-cols-3 ">
        {destinations.map((item, index) => (
          <div
            key={index}
            className={`p-14  text-center ${index === 1 ? "bg-white" : ""}`}
          >
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="text-orange-500 italic mb-4 font-2">{item.guide}</p>
            <p className="text-gray-600 mb-6">{item.description}</p>
            <button className="text-orange-500 font-semibold uppercase hover:underline">
              View More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
