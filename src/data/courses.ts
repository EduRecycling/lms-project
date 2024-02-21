const courses = [
  {
    id: "146357637458",
    title: "Community Development Projects",
    description:
      "This is a comphrensive program for communities with the goal of reducing waste, creating eco-friendly environment",
    about: [
      "This is a comphrensive program for communities with the goal of reducing waste, creating eco-friendly environment, recycling waste materials and items reuse",
      "The community plays in pivotal role in waste management and recycling, as it fosters a sense of responsibility, promotes adequate recycling resources, advocates for recycling literacy and sensitization trainings with the aim of eradicating the gap between recyclers and end users. ",
    ],
    image: "/images/offerings/community.png",
    objectives: [
      'At the end of the course, learners should understand that humans impact the environment but that communities can use science to protect Earth"s resources and the environment',
      "At the end of the course, learners should understand basic terms in an ecofriendly environment",
      "At the end of the course, learners should partner and volunteer where necessary in programs, events, trainings that support eco-friendliness - At the end of the course, learners should be well positioned for basic opportunities in the eco community",
      "At the end of the course, learners should have deep understanding of the benefits that surrounds recycling literacy and as well join in our mission for free recycling education for 1,000,000 Nigerians by 2026  ",
    ],
    duration: "2 Weeks",
    type: "Comunnity",
    enrolled: 3544,
    price: "free",
    certificate: {
      link: "",
    },
    language: ["English"],
    modules: [
      {
        id: 1,
        sn: "1.0",
        title: "Landfill",
        locked: false,
        description: "string",
        image: null,
        type: "article",
        file: null,
        article: "string",
        references: [],
        tests: [],
        lessons: [
          {
            id: 1,
            title: "Introduction",
            type: "article",
            markup: `<div className="t flex flex-col gap-4">
      <h4 className="font-semibold text-xl">Exercise 1: What is landfill?</h4>
      <p>
        Landfill is where our trash, also referred to as municipal solid waste
        (MSW), is buried.
      </p>
      <img
        src="/images/zero-landfill.PNG"
        alt="."
        className="w-100 max-w-fill"
      />
      <div className="types flex flex-col gap-5">
        <h4 className="font-semibold text-xl">
          There are two different types of landfills:
        </h4>
        <ul>
          <li>- An unlined landfill, which does not have a liner</li>
          <li>
            - A lined landfill, which has a liner system underneath all of the
            MSW.
          </li>
        </ul>
        <p>
          Lined landfills are a great example of using science, technology,
          engineering, and math to improve the safe placement and compaction of
          the public’s trash.
        </p>
      </div>
      <div className="video w-full max-w-full">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/lIqHBHto06w?si=oEvNet7lTl9nD_QZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <p>
            Once the garbage truck picks up your trash can, they either bring the waste to a
transfer station or deliver it straight to the landfill. A transfer station is a location
where trash trucks and residents unload their trash and then the trash is reloaded
onto a larger truck to be sent to a landfill. This reduces the amount of trips that
garbage trucks have to take to the landfill if the landfill is located far away from
the city.

      </p>
    </div>`,
          },
          {
            id: 2,
            title: "What is landfill",
            type: "article",
            markup: `
            <div className="t flex flex-col gap-4">
      <h4 className="font-semibold text-xl">Exercise 2: Photodegrading</h4>
      <div>
          <p className="flex-col gap-4">
          It is unknown exactly how long plastic takes to decompose. Plastic breaks down
into smaller and smaller pieces without ever breaking into simple compounds.\n
This process is called photodegrading because the sun’s light is what is breaking
down the plastic. Small fragments of plastic are often found in the ocean and are
harmful to animals and the environment.
          </p>
          <img
        src="/images/reduce.PNG"
        alt="."
        className="w-100 max-w-fill"
      />
          <img
        src="/images/bin.PNG"
        alt="."
        className="w-100 max-w-fill"
      />
      <p>Additionally, in a landfill, items can take even longer to decompose because
landfills are only built to store, not degrade, waste. Because of the lack of air and
water, items can take much longer to degrade.</p>

      </div>
</div>
            `,
          },
          {
            id: 3,
            title: "Types of landfill",
            type: "article",
            markup: `
              <div className="t flex flex-col gap-4">
            <div class="flex-col gap-4">
                <h4 className="font-semibold text-xl">Exercise 3: Bio-degration</h4>
            <p className="flex-col gap-4">
            Biodegradation is the process by which microorganisms break down organic matter. Depending on the material, this can take days, weeks or even centuries. Products that biodegrade quickly are preferable to those that don't; their harmful contents can be broken down in a shorter period of time.
            </p>
          </div>
            <div class="flex-col gap-4">
                <h4 className="font-semibold text-xl">WHAT IS BIODEGRADATION?</h4>
            <p className="flex-col gap-4">
            Natural materials such as wood gradually break down into their component parts when left in the environment. This is due to the action of naturally occurring microorganisms such as bacteria and fungi, in a process known as “biodegradation”. Most industrial chemicals, however, will not biodegrade, and often remain in the environment for years or even decades.

\nIn an effort to mitigate the impact of their products on the environment, companies are increasingly making more of their portfolios biodegradable. Biodegradation is an important factor in lowering the environmental impact of products at the end of their lifecycles.
            </p>
          </div>
            <div class="flex-col gap-4">
                <h4 className="font-semibold text-xl">WHY IS BIODEGRADATION IMPORTANT?</h4>
            <p className="flex-col gap-4">
            Biodegradation helps to minimize the environmental impact of products that appear in the environment – ensuring they decompose into less harmful products (water, biomass, and CO2). It is also helpful from a recyclability standpoint because it allows raw materials to be reclaimed and reused more easily at the end of a product’s lifecycle.
            </p>
          </div>
</div>
            `,
          },
        ],
        objectives: [
          {
            title: "Introduction",
            markup:
              "<div>Imagine if all of the trash you produced in the past year was buried in your backyard.<div>",
          },
          {
            title: "What is landfill",
            markup: "",
          },
          {
            title: "Types of landfill",
            markup: "",
          },
          {
            title: "Assessment",
            markup: "",
          },
          {
            title: "Landfill problems",
            markup: "",
          },
          {
            title: "Assessment",
            markup: "",
          },
          {
            title: "Layers of Landfill",
            markup: "",
          },
          {
            title: "Assessment",
            markup: "",
          },
          {
            title: "Conclusion",
            markup: "",
          },
        ],
      },
    ],
  },
];

export default courses;
