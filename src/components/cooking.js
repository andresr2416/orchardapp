import React from "react";
import { motion } from "framer-motion";

const Cooking = () => {
  return (
    <div className="cooking">
      <div className="BlockImage-Text">
        <div class="Images">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="Left"
          >
            <img
              src={require("../assets/images/cooking.png")}
              alt="Imagen de Cocina"
              className="Left"
            />
          </motion.div>
          <div>
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 1 }}
              transition={{ duration: 2 }}
              src={require("../assets/images/chef.png")}
              alt="Imagen de Cocina"
              className="Right-Top"
            />
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 1 }}
              transition={{ duration: 2 }}
              src={require("../assets/images/eggs.png")}
              alt="Imagen de Cocina"
              className="Right-Bottom"
            />
          </div>
        </div>
        <div class="Content">
          <div class="Headline">
            <span class="WHAT-DOES-COOKING-MEAN">WHAT DOES COOKING MEAN?</span>
          </div>
          <span class="Is-it-simply-applying-heat-to-a-food-product-A-way-of-making-certain-food-safe-to-eat-Or-a-way-to">
            Is it simply applying heat to a food product? A way of making
            certain food safe to eat? Or a way to create flavour and make food
            more appealing? This is just part of what Hervé This, the father of
            molecular gastronomy, has dedicated his life to finding out. We
            spoke to him to find out what his experiments have told him. And in
            the process even discovered the secret to cooking the perfect egg...
          </span>
          <div class="Call-out">
            <span class="THE-PERFECT-EGG">THE PERFECT EGG</span>
            <span class="Keep-water-between-67-and-68C-for-a-flavourful-tender-yolk">
              Keep water between 67 and 68°C for a flavourful, tender yolk
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cooking;
