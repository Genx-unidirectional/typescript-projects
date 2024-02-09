import { useState } from "react";
import Counter from "./components/Counter";
import Heading from "./components/Heading";
import Section from "./components/Section";
import List from "./components/List";

function App() {
  const [value, setValue] = useState<number>(1);
  return (
    <>
      <Heading title={"Hello"} />
      <Section> Yep</Section>
      <Counter setValue={setValue}>Count : {value} </Counter>
      <List
        items={["☕ Coffee", "🌮 Tacos", "💻 Code"]}
        render={(item: string) => <span className="gold">{item}</span>}
      />
    </>
  );
}

export default App;
