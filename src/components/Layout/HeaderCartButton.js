// import Header from "./Header"
import classes from './HeaderCartButton.module.css';
import CartIcon from "./CartIcon";

const HeaderCartButton = () => {
    return <button className={classes.button} >
    <span className={classes.icon}>
        <CartIcon/>
    </span>
    <span>Your Cart</span>
    <span className={classes.badge}>
        3
    </span>
    <span></span>
</button>
}

export default HeaderCartButton;
