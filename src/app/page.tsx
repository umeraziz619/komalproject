import { Card, Footer, Header, NavBar } from "@/components";
import { homeYtCards } from "@/enums/DummyData";

export default function Home() {
  return (
    <>
      {/* ============= NavBar ================ */}
      <NavBar />
      {/* ============= Header ================ */}
      <Header />

      {/* =========== Cards Section ========== */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 mx-auto">
          <div className="flex flex-col">
            <div className="h-1 sm:mt-12 bg-gray-200 rounded overflow-hidden max-sm:mt-7">
              <div className="w-full h-full bg-slate-400"></div>
            </div>
            <div className="flex justify-center items-center py-6 mb-12">
              <h1 className="text-gray-900 font-semibold title-font text-3xl mb-2 sm:mb-0">
                Youtube Vidoes
              </h1>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 max-md:justify-center">
            {/* ============= Each Youtube Card ============== */}
            {homeYtCards?.map((item) => {
              return <Card key={item.id} item={item} />;
            })}
          </div>
        </div>
      </section>

      {/* ============= Footer ================ */}
      <Footer />
    </>
  );
}
