import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
import s from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      <header className={s.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={s["main-image"]}>
        <img src={mealsImage} alt="" />
      </div>
    </>
  );
};

export default Header;
