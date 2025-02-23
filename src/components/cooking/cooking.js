import React, { useState } from "react";
import Modal from "react-modal";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import './cooking.scss';
Modal.setAppElement("#root");

const Cooking = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const [currentImage, setCurrentImage] = useState(null); 

  const openModal = (src) => {
    setCurrentImage(src);
    setIsOpen(true); 
  };

  const closeModal = () => {
    setIsOpen(false); 
  };

  return (
      <div className="BlockImage-Text">
        <div className="Images">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="Left"
          >
            <img
              src={require("../../assets/images/cooking.png")}
              alt="Imagen de Cocina"
              className="Left"
              onClick={() => openModal(require("../../assets/images/cooking.png"))} 
            />
          </motion.div>
          <div className="order-images">
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 1 }}
              transition={{ duration: 2 }}
              src={require("../../assets/images/chef.png")}
              alt="Imagen de Cocina"
              className="Right-Top"
              onClick={() => openModal(require("../../assets/images/chef.png"))} 
            />
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 1 }}
              transition={{ duration: 2 }}
              src={require("../../assets/images/eggs.png")}
              alt="Imagen de Cocina"
              className="Right-Bottom"
              onClick={() => openModal(require("../../assets/images/eggs.png"))} 
            />
          </div>
        </div>
        <div className="Content">
          <div className="Headline">
            <span className="WHAT-DOES-COOKING-MEAN">
              WHAT DOES COOKING MEAN?
            </span>
          </div>
          <span className="text-cooking">
            Is it simply applying heat to a food product? A way of making
            certain food safe to eat? Or a way to create flavour and make food
            more appealing? This is just part of what Hervé This, the father of
            molecular gastronomy, has dedicated his life to finding out. We
            spoke to him to find out what his experiments have told him. And in
            the process even discovered the secret to cooking the perfect egg...
          </span>
          <div className="Call-out">
            <span className="THE-PERFECT-EGG">THE PERFECT EGG</span>
            <span className="WATER">
              Keep water between 67 and 68°C for a flavourful, tender yolk
            </span>
          </div>
        </div>

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal} 
        contentLabel="Imagen Ampliada"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5 }}
          style={{ position: "relative", maxWidth: "70%", maxHeight: "70%" }}
        >
        
          <button
            onClick={closeModal}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              background: "transparent",
              border: "none",
              fontSize: "24px",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <img
            src={currentImage}
            alt="Imagen Ampliada"
            style={{ width: "100%", height: "100%", objectFit: "contain" }} 
          />
        </motion.div>
      </Modal>
      </div>
  
  );
};

export default Cooking;
