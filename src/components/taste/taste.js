import React, { useState } from "react";
import "./taste.scss";
import Modal from "react-modal";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const cardData = [
  {
    id: 1,
    image: require("../../assets/images/red.png"),
    title: "Red",
    description:
      "Red foods remind us of berries and soft fruits, so we anticipate a sweet taste.",
  },
  {
    id: 2,
    image: require("../../assets/images/green.png"),
    title: "Green",
    description:
      "Fresh, zingy green colours are reminiscent of unripe fruit, promising sour or acid flavours.",
  },
  {
    id: 3,
    image: require("../../assets/images/white.png"),
    title: "White",
    description:
      "White foods evoke memories of salt and salty flavours, driving the expectation of a savoury treat.",
  },
];

const Taste = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openModal = (src) => {
    setCurrentImage(src);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleCardClick = (src) => {
    console.log("Card clicked:", src);
    openModal(src);
  };

  return (
    <div className="taste">
      <div className="Block3-cards">
        <div className="Content">
          <motion.div
            className="Headline"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0 }}
          >
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                console.log("'Taste-the-Colours' clicked");
              }}
              className="Taste-the-Colours Text-Style"
            >
              Taste the Colours
            </a>
          </motion.div>

          <motion.div
            className="Card-List"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            {cardData.map((card, index) => (
              <motion.div
                key={card.id}
                className="Card"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: index * 0.8,
                }}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="Tight-Top"
                  onClick={() => handleCardClick(card.image)}
                />
                <div className="Card-Content">
                  <a
                    href="/"
                    onClick={(e) => {
                      e.preventDefault();
                      console.log("'Card-title' clicked");
                    }}
                    className="Card-title"
                  >
                    {card.title}
                  </a>
                  <a
                    href="/"
                    onClick={(e) => {
                      e.preventDefault();
                      console.log("'Card-Description' clicked");
                    }}
                    className="Card-Description"
                  >
                    {card.description}
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
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

export default Taste;
