import { headerItems } from "../../constants/headerItems";

export const Header = () => (
  <header className="fixed inset-0 h-(--header-height) bg-(--header-bg) flex justify-center border-b border-(--primary-border) z-50">
    <ul className="flex gap-5 justify-center items-center">
      {headerItems.map((item) => (
        <li
          key={item.id}
          className="text-(--text-muted) hover:text-(--text-main)"
        >
          <a href={item.link}>{item.name}</a>
        </li>
      ))}
    </ul>
  </header>
);
