import Sidebar from "./sidebar";

const featuredPost = [
  {
    id: 1,
    title:
      "Consultation to open on plans for new substation",
    href: "https://www.bbc.com/news/articles/c722lv32l2xo",
    description:
      `A consultation over plans to build a new electricity substation near Rotherham will open on Monday. National Grid wants to create...`,
    date: "May 19, 2024",
    datetime: "2024-05-19",
    author: {
      name: "Adam Laver",
      href: "#",
      imageUrl:
        "https://media.muckrack.com/profile/images/14484258/djulfxne_400x400.jpg.256x256_q100_crop-smart.jpg",
    },
  },
  {
    id: 2,
    title:
      "Energy storage plant plans recommended for approval",
    href: "https://www.bbc.com/news/articles/cz5dpnp7850o",
    description:
        `Plans for the construction of an energy storage plant have been recommended for approval. The proposals...`,
    date: "April 26, 2024",
    datetime: "2024-04-26",
    author: {
      name: "Eleanor Storey",
      href: "#",
      imageUrl:
        "https://www.edp24.co.uk/resources/images/17693332?type=thumb",
    },
  },
];

export default function Content() {
  return (
    <div className="bg-white mx-auto py-24 sm:py-32 grid grid-cols-1 md:grid-cols-2 px-6">
      <div className="mx-auto max-w-7xl flex flex-col">
        {featuredPost.map((item) => (
          <article
            key={item.id}
            className="mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-lg"
          >
            <time
              dateTime={item.datetime}
              className="block text-sm leading-6 text-gray-600"
            >
              {item.date}
            </time>
            <h2
              id="featured-post"
              className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              {item.title}
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              {item.description}
            </p>
            <div className="mt-4 flex flex-col justify-between gap-6 sm:mt-8 sm:flex-row-reverse sm:gap-8 lg:mt-4 lg:flex-col">
              <div className="flex">
                <a
                  href={item.href}
                  aria-describedby="featured-post"
                  className="text-sm font-semibold leading-6 text-indigo-600"
                  target="_blank"
                >
                  Continue reading <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
              <div className="flex">
                <a
                  href={item.author.href}
                  className="flex gap-x-2.5 text-sm font-semibold leading-6 text-gray-900"
                >
                  <img
                    alt=""
                    src={item.author.imageUrl}
                    className="h-6 w-6 flex-none rounded-full bg-gray-50"
                  />
                  {item.author.name}
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="mx-auto w-full max-w-2xl border-t border-gray-900/10 pt-12 sm:pt-16 lg:mx-0 lg:max-w-none lg:border-t-0 lg:pt-0">
        <div className="-my-12 divide-y divide-gray-900/10">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
