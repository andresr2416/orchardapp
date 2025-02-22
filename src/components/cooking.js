import React from "react";
import { motion } from "framer-motion";

const Cooking = () => {
  return (
    <div className="cooking">
      <motion.div 
      className="BlockImage-Text">
        <div class="Images">
          <div className="Left">
            <img
              src={require("../assets/images/cooking.png")}
              alt="Imagen de Cocina"
              className="Left"
            />
          </div>          
          <div>
          <img
              src={require("../assets/images/chef.png")}
              alt="Imagen de Cocina"
              className="Right-Top"
            />
             <img
              src={require("../assets/images/eggs.png")}
              alt="Imagen de Cocina"
              className="Right-Bottom"
            />
          </div>
       
        </div>
      </motion.div>
    </div>
  );
};

export default Cooking;
