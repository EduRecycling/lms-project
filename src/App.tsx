import WOW from "wow.js";
import PageRoute from "./route";

export default function App() {
  new WOW().init();

  return (
    <>
      <PageRoute />
    </>
  );
}
