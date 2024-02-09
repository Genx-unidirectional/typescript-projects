import { ReactNode } from "react";

interface ListItem<T> {
  items: T[];
  render(item: T): ReactNode;
}

const List = <T,>({ items, render }: ListItem<T>) => {
  return (
    <ul>
      {items.map((item, idx) => (
        <li key={idx}>{render(item)}</li>
      ))}
    </ul>
  );
};
export default List;

// Put below code in App.tsx

{
  /* <List
        items={["☕ Coffee", "🌮 Tacos", "💻 Code"]}
        render={(item) => <span className="gold">{item}</span>}
      /> */
}
