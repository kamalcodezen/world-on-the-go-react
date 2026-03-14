import { Suspense } from "react";
import "./App.css";
import Countries from "./component/Countries/Countries";

const countriesApi = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/all");
  return await res.json();
};

function App() {
  const countriesPromise = countriesApi();

  return (
    <>
      <Suspense fallback={<h1>Kamal data is loading.....</h1>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  );
}

export default App;
