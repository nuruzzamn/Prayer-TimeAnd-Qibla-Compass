import Header from "../src/layout/Header";
import Fragment from "../src/layout/Fragment";
import MiddleSection from "../src/layout/MiddleSection";
import Test from "./Test/Test";

function App() {
  return (
    <>
      {/* <section className="max-container flex justify-center items-center sm:padding">
        <section className="max-w-screen-sm sm:padding-x pb-5 flex justify-center items-center flex-col border border-gray-300 rounded-lg shadow-2xl">
          <Header />
          <Fragment />
          <MiddleSection />
        </section>
      </section> */}
      <Test />
    </>
  );
}

export default App;
