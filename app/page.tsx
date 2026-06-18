
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020817] text-white">

      {/* Navbar */}
      <nav className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-3xl font-bold">
            PADHLE <span className="text-blue-500">INDIA</span>
          </h1>

          <div className="hidden md:flex gap-8">
            <a href="#">Home</a>
            <a href="#">Courses</a>
            <a href="#">Notes</a>
            <a href="#">Test Series</a>
            <a href="#">Blog</a>
          </div>

          <button className="bg-blue-600 px-5 py-2 rounded-xl">
            Join Now
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <div className="inline-block px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-yellow-400">
              ⭐ India's Most Loved Maths Educator
            </div>

            <h1 className="mt-8 text-6xl font-black leading-tight">
              Learn Mathematics
              <br />
              Like Never Before
              <br />
              With{" "}
              <span className="text-blue-500">
                ABHI BHAIYA
              </span>
            </h1>

            <p className="mt-6 text-slate-400 text-xl">
              Join 38 Lakh+ students for CBSE Class 9, 10,
              Olympiad and Board Exam Preparation.
            </p>

            <div className="flex gap-4 mt-8">
              <button className="bg-blue-600 px-8 py-4 rounded-2xl">
                Start Learning
              </button>

              <button className="border border-slate-700 px-8 py-4 rounded-2xl">
                Free Resources
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <Image
              src="/abhi.png"
              alt="Abhi Bhaiya"
              width={500}
              height={600}
              priority
              className="rounded-3xl"
            />
          </div>

        </div>
      </section>

      {/* Featured */}
      <section className="bg-white text-slate-700 py-12">
        <div className="max-w-6xl mx-auto text-center">
          <p className="font-semibold mb-8">
            AS FEATURED ON
          </p>

          <div className="flex flex-wrap justify-center gap-12 text-3xl font-bold">
            <span>Unacademy</span>
            <span>YouTube</span>
            <span>Toppr</span>
            <span>BYJU'S</span>
            <span>Google News</span>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-12">
          Our Top Programs
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-slate-900 p-6 rounded-3xl">
            <h3 className="text-2xl font-bold">
              Prahaar
            </h3>
            <p className="text-slate-400 mt-2">
              Class 10 Complete Mathematics
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-3xl">
            <h3 className="text-2xl font-bold">
              Aarambh
            </h3>
            <p className="text-slate-400 mt-2">
              Class 9 Foundation Batch
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-3xl">
            <h3 className="text-2xl font-bold">
              Board Booster
            </h3>
            <p className="text-slate-400 mt-2">
              Maximum Score Program
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-3xl">
            <h3 className="text-2xl font-bold">
              NCF 2023
            </h3>
            <p className="text-slate-400 mt-2">
              New Curriculum Coverage
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}
