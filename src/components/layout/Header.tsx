import { headerItems } from "../../constants/headerItems";

export const Header = () => (
  <header className="fixed top-0 h-[10vh] w-screen bg-gray-800 flex justify-center">
    <ul className="flex gap-5 justify-center items-center">
      {headerItems.map((item) => (
        <li key={item.id} className="text-white">
          <a href={item.link}>{item.name}</a>
        </li>
      ))}
    </ul>
  </header>
);
