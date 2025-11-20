import { NavLink } from "react-router-dom";

const UserTabs = () => {
    const getLinkClassName = ({ isActive }: { isActive: boolean }) =>
        `header-nav__link${isActive ? " header-nav__link--active" : ""}`;

    return (
        <nav className="header-nav" aria-label="Навигация по разделам">
            <ul className="header-nav__list">
                <li className="header-nav__item">
                    <NavLink to="/posts" className={getLinkClassName}>
                        Все посты
                    </NavLink>
                </li>
                <li className="header-nav__item">
                    <NavLink to="/users/1/posts" className={getLinkClassName}>
                        Мои посты
                    </NavLink>
                </li>
                <li className="header-nav__item">
                    <NavLink to="/users/1/albums" className={getLinkClassName}>
                        Мои альбомы
                    </NavLink>
                </li>
                <li className="header-nav__item">
                    <NavLink to="/albums/1/photos" className={getLinkClassName}>
                        Мои фотографии
                    </NavLink>
                </li>
                <li className="header-nav__item">
                    <NavLink to="/users/1/todos" className={getLinkClassName}>
                        Мои задачи
                    </NavLink>
                </li>
                <li className="header-nav__item">
                    <NavLink to="/posts/1" className={getLinkClassName}>
                        Пост ID
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default UserTabs;