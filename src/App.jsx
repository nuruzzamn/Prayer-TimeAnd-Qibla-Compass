import Header from "../src/layout/Header";
import Fragment from "../src/layout/Fragment";
import MiddleSection from "../src/layout/MiddleSection";

function App() {
  return (
    <>
      <section className="max-container flex justify-center items-center bg-green-100 padding">
        <section className="max-w-screen-sm padding flex justify-center items-center flex-col border border-gray-300 rounded-lg shadow-2xl">
          <Header className="padding"/>
          <Fragment className="padding"/>
          <MiddleSection className="padding"/>
        </section>
      </section>
    </>
  );
}

export default App;
