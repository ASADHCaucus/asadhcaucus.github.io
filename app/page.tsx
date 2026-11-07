import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const newsItems = ["01", "02", "03"];
const newsPlaceholder =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eum vero blanditiis officiis dicta recusandae, ullam, corporis autem reprehenderit possimus ab modi libero, praesentium ex mollitia pariatur veniam? Voluptatem, quidem.";

export default function Home() {
  return (
    <div className="pb-10">
      {/* Hero Section */}
      <section className="flex flex-row items-end justify-end gap-4 pt-20 px-20 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.35)),url(https://placehold.co/600x400)] bg-cover bg-center h-150">

        <div className="flex flex-col pb-30">
          <h1 className="text-4xl font-bold text-right text-white">Welcome to the ASA Digital Humanities Caucus</h1>
          <p className="text-lg text-right text-white">Connecting scholars in the field of digital humanities.</p>
        </div>
      </section>
      {/* latest news Section  using carousel */}
      <section
        aria-labelledby="latest-news-heading"
        className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 lg:px-20 lg:py-24"
      >
        <div className="mb-8">

          <h2
            id="latest-news-heading"
            className="text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Latest News
          </h2>
        </div>
        <Carousel
          opts={{ align: "start" }}
          aria-labelledby="latest-news-heading"
          className="w-full min-w-0"
        >
          <CarouselContent className="-ml-6 items-stretch">
            {newsItems.map((number) => (
              <CarouselItem
                key={number}
                aria-label={`Update ${number}, ${newsItems.length} slides`}
                className="pl-6 md:basis-1/2"
              >
                <article className="flex h-full flex-col rounded-2xl border border-border  p-6 sm:p-8 bg-gray-100">
                  <div className=" flex items-center justify-between gap-4">
                    <span className=" mb-2 text-sm font-medium text-muted-foreground">
                      Posted on 11/07/2026
                    </span>


                  </div>
                  <h3 className="mb-3 text-xl font-semibold tracking-tight sm:text-2xl">
                    Update {number}
                  </h3>
                  <p className="text-base leading-7 text-muted-foreground">
                    {newsPlaceholder}
                  </p>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-6 flex items-center justify-between gap-4">
            <button
              type="button"
              className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
            >
              View More
            </button>
            <div className="flex shrink-0 gap-3">
              <CarouselPrevious className="static inset-auto m-0 size-11 border-border bg-card hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 dark:hover:border-blue-800 dark:hover:bg-blue-950 dark:hover:text-blue-300" />
              <CarouselNext className="static inset-auto m-0 size-11 border-border bg-card hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 dark:hover:border-blue-800 dark:hover:bg-blue-950 dark:hover:text-blue-300" />
            </div>
          </div>
        </Carousel>

      </section>

      {/* get involved */}
      <section className="mt-20 mx-auto w-full max-w-5xl">
        <h2 className="text-3xl font-bold mb-6">Get Involved</h2>
        <div className="flex flex-row gap-4">
          <p className="text-lg leading-7 text-muted-foreground">
            All are welcomed and encouraged to join the DH Caucus! Our membership includes scholars from across a wide range of institutions and experiences, including university faculty and staff, K-12 educators, graduate students, independent scholars, and activists, as well as working professionals from outside the academy. The DH Caucus strives to be an inclusive environment.
          </p>
          <img className="flex-1 mt-4 object-cover" src="https://placehold.co/400x300" alt="Get Involved" />
        </div>
      </section>

      {/* about section */}
      <section className="mt-20 mx-auto w-full max-w-5xl">
        <h2 className="text-3xl font-bold mb-6">About the Caucus</h2>
        <p className="text-lg leading-7 text-muted-foreground">
          The ASA Digital Humanities Caucus is dedicated to connecting scholars in the field of digital humanities.
        </p>
      </section>
    </div>
  );
}
