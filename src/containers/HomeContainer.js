import Home from "../components/Home";
import { connect } from "react-redux";
import {addToCart} from "../Services/Actions/Action";

const mapStateToProps = state=>({
    cartData:state.data
})
const mapDispatchToProps = dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data))
})


export default connect(mapStateToProps, mapDispatchToProps)(Home)