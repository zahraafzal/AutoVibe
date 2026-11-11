const articles = [
  {
    id: 1,
    category: "Car Reviews",
    title: "Top 5 Cars to Watch in 2026",
    date: "November 10, 2026",
    description:
      "Explore modern cars with impressive designs, advanced features and powerful performance.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
    imageAlt: "Black sports car driving on an open road",
    related: [5, 4],
    content: [
      {
        heading: "Introduction",
        text: "Every year car companies launch new models with better designs, more safety features and smarter technology. In 2026 the biggest changes are coming from hybrid engines, bigger touch screens and driver assistance systems that are now available even in small family cars.",
      },
      {
        heading: "What Makes a Car Worth Watching",
        text: "When we look at a new car we check four main things: how it drives, how much fuel it uses, how safe it is and how comfortable it feels on a long trip. A car with a good balance of all four is usually a better choice than a car that is only fast or only cheap.",
      },
      {
        heading: "Hybrids Are Everywhere",
        text: "Many of the most interesting cars this year are hybrids. They use a petrol engine and an electric motor together, so they save fuel in city traffic without needing to be charged. If you want to go fully electric, read our article on the future of electric cars.",
        link: { text: "The Future of Electric Cars", to: "/article/3" },
      },
      {
        heading: "Our Advice",
        text: "Do not buy a car only because it is new or popular. Make a list of what you really need, compare two or three models and always take a test drive. Our first car buying guide explains this step by step.",
        link: { text: "How to Choose Your First Car", to: "/article/4" },
      },
    ],
  },
  {
    id: 2,
    category: "Maintenance",
    title: "Essential Car Maintenance Tips",
    date: "November 08, 2026",
    description:
      "Learn simple ways to maintain your vehicle and improve its performance.",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3",
    imageAlt: "Close-up of a car engine with belts and parts",
    related: [4, 3],
    content: [
      {
        heading: "Why Maintenance Matters",
        text: "Regular maintenance keeps your car safe, saves fuel and prevents expensive repairs later. Most problems start small, so a few simple checks every month can save you a lot of money and stress.",
      },
      {
        heading: "Check the Engine Oil",
        text: "Engine oil protects the moving parts of the engine. Check the oil level with the dipstick once a month when the engine is cold. If the oil is very dark or below the minimum mark, top it up or get it changed. Always use the oil grade written in your owner's manual.",
      },
      {
        heading: "Look After Your Tyres",
        text: "Check tyre pressure every month using the number written on the sticker inside the driver's door. Low pressure wastes fuel and wears the tyres faster. Also check the tread depth, because worn tyres have less grip on wet roads.",
      },
      {
        heading: "Brakes, Battery and Lights",
        text: "If you hear a squeaking sound when braking or the brake pedal feels soft, get the brakes checked quickly. Keep the battery terminals clean and make sure all lights and indicators are working. Following the service schedule in your manual is the easiest way to stay on top of everything.",
        link: { text: "How to Choose Your First Car", to: "/article/4" },
      },
    ],
  },
  {
    id: 3,
    category: "Electric Vehicles",
    title: "The Future of Electric Cars",
    date: "November 06, 2026",
    description:
      "Discover how electric vehicles are transforming the automotive industry.",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7",
    imageAlt: "Electric car plugged into a charging cable",
    related: [1, 2],
    content: [
      {
        heading: "How Electric Cars Work",
        text: "An electric car uses a large battery to power an electric motor instead of a petrol engine. There is no gearbox to change, no oil to replace and no exhaust smoke. When you slow down, the motor puts some energy back into the battery.",
      },
      {
        heading: "Charging at Home and on the Road",
        text: "Most owners charge at home overnight using a wall charger. On long trips they use fast chargers, which can fill most of the battery in around half an hour. Charging at home is usually much cheaper than buying petrol for the same distance.",
      },
      {
        heading: "Benefits and Challenges",
        text: "Electric cars are quiet, smooth and cheap to run, and they need less maintenance than petrol cars. The main challenges are the higher purchase price, the time it takes to charge and the number of charging stations in some areas.",
      },
      {
        heading: "What Comes Next",
        text: "Batteries are getting cheaper and lasting longer, and more charging stations are being built every year. In the next few years we will see more affordable electric cars with longer range, which will make them a real choice for many more drivers.",
        link: { text: "Top 5 Cars to Watch in 2026", to: "/article/1" },
      },
    ],
  },
  {
    id: 4,
    category: "Buying Guides",
    title: "How to Choose Your First Car",
    date: "November 04, 2026",
    description:
      "Important things to consider before purchasing your first vehicle.",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7",
    imageAlt: "Silver car parked on a quiet street",
    related: [2, 1],
    content: [
      {
        heading: "Set Your Budget",
        text: "Your budget is more than the price of the car. Also think about insurance, registration, fuel, servicing and repairs. A cheap car that uses a lot of fuel or breaks down often can cost more in the long run.",
      },
      {
        heading: "New or Used?",
        text: "A new car has a warranty and no hidden problems, but it loses value quickly in the first few years. A used car is cheaper, but you need to check it carefully. Ask for the service history and make sure the documents match the car.",
      },
      {
        heading: "Inspect the Car",
        text: "Look for rust, uneven gaps between body panels and uneven tyre wear. Start the engine from cold and watch for warning lights or smoke. If you are not sure, pay a mechanic to inspect the car before you buy it.",
        link: { text: "Essential Car Maintenance Tips", to: "/article/2" },
      },
      {
        heading: "Take a Test Drive",
        text: "Drive the car for at least 20 minutes on different roads. Check the brakes, steering and gear changes, and listen for strange noises. If something does not feel right, do not be afraid to walk away and look at another car.",
      },
    ],
  },
  {
    id: 5,
    category: "Car Reviews",
    title: "Sports Cars and Their Performance",
    date: "November 02, 2026",
    description:
      "A closer look at speed, engineering and modern sports car technology.",
    image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d",
    imageAlt: "Low sports car driving fast on a road",
    related: [1, 3],
    content: [
      {
        heading: "What Makes a Sports Car",
        text: "A sports car is built for driving fun. It is usually low, light and powerful, with sharp steering and strong brakes. Comfort and space are less important than speed and handling.",
      },
      {
        heading: "Engine and Speed",
        text: "Most sports cars have powerful petrol engines, but more and more use hybrid or fully electric power. Electric motors give instant power, so some electric sports cars can reach 100 km/h faster than many petrol supercars.",
      },
      {
        heading: "Handling and Safety",
        text: "Good handling comes from a low centre of gravity, wide tyres and a well tuned suspension. Modern sports cars also have stability control and advanced brakes, which help keep the driver safe at high speed.",
      },
      {
        heading: "Is a Sports Car Right for You?",
        text: "Sports cars are exciting, but they cost more to insure, use more fuel and have less space. If you need one car for daily use, a fast hatchback or a sporty sedan can be a more practical choice.",
        link: { text: "Top 5 Cars to Watch in 2026", to: "/article/1" },
      },
    ],
  },
];

export const categories = [
  "Car Reviews",
  "Maintenance",
  "Electric Vehicles",
  "Buying Guides",
];

export default articles;
