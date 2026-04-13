import WorkCard from "./WorkCard";

const WorksWrapper = () => {
  const amfAttributes = [
    "Responsive",
    "Design",
    "Development",
    "Authentication",
  ];
  const stormAttributes = [
    "Entertainment",
    "Development",
    "Educational",
    "Mobile First",
  ];
  const realEstateAttributes = [
    "Responsive",
    "Design",
    "Development",
    "Smooth",
  ];
  const aShareAttributes = [
    "Mobile First",
    "Development",
    "Productivity",
    "Problem Solving",
  ];

  const skillsLogos = [
    "html.png",
    "CSS-Logo.png",
    "tailwind.png",
    "JavaScript-Logo.png",
    "react.png",
    "vue.png",
    "sql.png",
    "typescript.png",
    "flutter.png",
    "dart.png",
    "django.png",
    "figma.png",
  ];

  return (
    <div className="work_section p-(--padding) bg-gray-100 shapedividers_com-9634">
      <h2 className="mb-8 text-6xl max-[992px]:text-5xl font-medium text-center">
        MY WORKS
      </h2>
      <div className="works_wrapper max-[992px]:space-y-8  min-[992px]:grid min-[992px]:grid-cols-2 gap-8">
        <WorkCard
          attributesData={amfAttributes}
          fit="object-cover"
          title=""
          video_url=""
        />
        <WorkCard
          attributesData={stormAttributes}
          title="Mobile Storm Trivia"
          video_url="/videos/storm_video.mp4"
          padding="pt-4"
        />
        <WorkCard
          attributesData={realEstateAttributes}
          title="Real Estate Plan"
          video_url="/videos/prop.mp4"
          fit="object-cover"
        />
        <WorkCard
          attributesData={aShareAttributes}
          title="Mobile Contacts Sharing App"
          video_url="/videos/a_share.mp4"
          padding="pt-4"
        />
      </div>

      <article className="mt-(--padding)">
        <h2 className="mb-8 font-medium text-center">SKILLS & TOOLS</h2>
        <section className="logos_section">
          <div className="slider">
            {skillsLogos.map((item, index) => (
              <figure className="logo_figure" key={index}>
                <img src={`/images/logos/${item}`} alt={`${item}`} />
              </figure>
            ))}
          </div>
          <div className="slider">
            {skillsLogos.map((item, index) => (
              <figure className="logo_figure" key={index}>
                <img src={`/images/logos/${item}`} alt={`${item}`} />
              </figure>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
};

export default WorksWrapper;
