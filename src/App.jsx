import Header from "../src/layout/Header";
import Fragment from "../src/layout/Fragment";
import MiddleSection from "../src/layout/MiddleSection";
import Test from "./Test/Test";

function App() {
  return (
    <>
      <section className="max-container flex justify-center items-center bg-green-100 padding sm:bg-red-100">
        <section className="max-w-screen-sm sm:padding-x pb-5 mt-[-40px] sm:mt-0 flex justify-center items-center flex-col border border-gray-300 rounded-lg shadow-2xl">
          <Header />
          <Fragment />
          <MiddleSection />
        </section>
      </section>
      {/* <Test /> */}
    </>
  );
}

export default App;
 