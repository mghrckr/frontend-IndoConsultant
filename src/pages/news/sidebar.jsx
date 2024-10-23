const posts = [
  {
    id: 1,
    title: "How AI is helping to prevent future power cuts",
    href: "https://www.bbc.com/news/business-68768314",
    description:
      "Artificial intelligence software is being used to predict electricity demand and supply.",
    imageUrl:
      "https://ichef.bbci.co.uk/news/480/cpsprodpb/A7E4/production/_133108924_gettyimages-1231246692.jpg.webp",
    date: "April 11, 2024",
    datetime: "2024-04-11",
    category: { title: "business", href: "#" },
    author: {
      name: "Joe Whitwell",
      role: "Technology Reporter",
      href: "#",
      imageUrl:
        "https://cdn.wan-ifra.org/wp-content/uploads/2021/08/24134642/Joe-Whitwell.jpg",
    },
  },
  {
    id: 2,
    title: "Hundreds of homes still without power after storm",
    href: "https://www.bbc.com/news/articles/cek7jvnm2p9o",
    description:
      "Electricity North West has been sending out support vehicles across the region to hand out meals.",
    imageUrl:
      "https://ichef.bbci.co.uk/news/480/cpsprodpb/8a4c/live/78cce400-b9ef-11ee-896d-39d9bd3cadbb.jpg.webp",
    date: "January 24, 2024",
    datetime: "2024-01-24",
    category: { title: "BBC News", href: "#" },
    author: {
      name: "Michael Foster",
      role: "BBC News",
      href: "#",
      imageUrl:
        "https://cdn.muckrack.com/static/images/icon-user-circle.png",
    },
  },
  {
    id: 3,
    title: "Community pantry loses £1,500 of food after power cut",
    href: "#",
    description:
      "UK Power Networks says it is working to fix the electrical fault.",
    imageUrl:
      "https://ichef.bbci.co.uk/news/1024/cpsprodpb/e361/live/41ee2e90-42bf-11ef-9b76-575d2882794d.jpg.webp",
    date: "July 15, 2024",
    datetime: "2024-07-15",
    category: { title: "BBC News, Suffolk", href: "#" },
    author: {
      name: "Mariam Issimdar",
      role: "BBC News, Suffolk",
      href: "#",
      imageUrl:
        "https://cdn.muckrack.com/static/images/icon-user-circle.png",
    },
  },
  // More posts...
];

export default function Sidebar() {
  return (
    <div className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            From the blog
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
          <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
            {posts.map((post) => (
              <article
                key={post.id}
                className="relative isolate flex flex-col gap-8 lg:flex-row"
              >
                <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                  <img
                    alt=""
                    src={post.imageUrl}
                    className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div>
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={post.datetime} className="text-gray-500">
                      {post.date}
                    </time>
                    <a
                      href={post.category.href}
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {post.category.title}
                    </a>
                  </div>
                  <div className="group relative max-w-xl">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a href={post.href} target="_blank">
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-gray-600">
                      {post.description}
                    </p>
                  </div>
                  <div className="mt-6 flex border-t border-gray-900/5 pt-6">
                    <div className="relative flex items-center gap-x-4">
                      <img
                        src={post.author.imageUrl}
                        className="h-10 w-10 rounded-full bg-gray-50"
                        alt="author image"
                      />
                      <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-900">
                          <a href={post.author.href}>
                            <span className="absolute inset-0" />
                            {post.author.name}
                          </a>
                        </p>
                        <p className="text-gray-600">{post.author.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
