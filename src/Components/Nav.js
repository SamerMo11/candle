import React from "react";
import { Link } from "react-router-dom";
import { motion, stagger, transform } from "framer-motion";

function Nav() {
return (
<nav>
    <motion.ul>
        <motion.li >
            <Link to="/">home</Link>
        </motion.li>
    </motion.ul>
</nav>
    );
  }
  
  export default Nav;