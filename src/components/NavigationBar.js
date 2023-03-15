import { Link } from "react-router-dom";
const NavigationBar = () => {
    return ( 
        <div>
            <ul>
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/Work">
                        Work
                    </Link>
                    {/* <a href="/Work">Work</a> */}
                </li>
                <li>
                    <Link to="/Contact">
                        Contact
                    </Link>
                    {/* <a href="/Contact">Contact</a> */}
                    
                </li>
                <li>
                    <Link to="/Cart">
                        Cart
                    </Link>
                    {/* <a href="/Contact">Contact</a> */}
                    
                </li>
                <li>
                    <Link to="/HookUse">
                        Use Reference Hook Sample
                    </Link>
                    {/* <a href="/Contact">Contact</a> */}
                    
                </li>
                <li>
                    <Link to="/HookReducer">
                        Use Reducer Hook Sample
                    </Link>
                    {/* <a href="/Contact">Contact</a> */}
                    
                </li>
            </ul>
        </div>
     );
}
 
export default NavigationBar;