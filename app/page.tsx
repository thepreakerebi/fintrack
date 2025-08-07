
import Topbar from "@/app/_components/topbar";
import Navigation from "@/app/_components/navigation";

export default function Home() {
  return (
    <section className="flex flex-col w-full h-screen">
      {/* Fixed topbar section */}
      <section className="fixed inset-x-0 top-0 z-50 w-full">
        <Topbar />
      </section>

      {/* Main content */}
      <section className="pt-16 w-full flex gap-12">
        <Navigation />
        <main className="flex-1">
          <h1>Hello World</h1>
        </main>
      </section>
    </section>
  );
}
