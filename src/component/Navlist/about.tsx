import React from "react";
import { motion } from "framer-motion";
import "./about.scss";
import { handleClick } from "../share";
export const About: React.FC = () => {
  return (
    <div className="about">
      <div className="heading1 h-primary">
        <motion.h2
          className="h-secondary"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Discover the Latest Blockbusters
        </motion.h2>
        <motion.p
          className="p-primary"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Explore New Movies, Web Series, and Anime on Our Website! Dive into a
          treasure trove of fresh releases across genres, from thrilling action
          flicks to heartwarming dramas and captivating anime series, all in one
          convenient platform
        </motion.p>
      </div>
      <div className="mission h-primary">
        <motion.h2
          className="h-secondary"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Stream Hindi Dubbed Movies
        </motion.h2>
        <motion.p
          className="p-primary"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Enjoy Your Favorite Films in Hindi, Exclusively on Our Website!
          Experience the magic of cinema in your preferred language with our
          extensive collection of Hindi-dubbed movies, ensuring entertainment
          for every viewer.
        </motion.p>
      </div>
      <div className="sensuality h-primary">
        <motion.h2
          className="h-secondary"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Stay Up-to-Date with Web Series
        </motion.h2>
        <motion.p
          className="p-primary"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Never Miss Out on the Hottest Web Series Releases! Keep pace with the
          latest trends in digital entertainment with our curated selection of
          web series, featuring compelling storylines and diverse genres to
          cater to all tastes.
        </motion.p>
      </div>
      <div className="join h-primary">
        <motion.h2
          className="h-secondary"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Immerse Yourself in Anime Adventures
        </motion.h2>
        <motion.p
          className="p-primary"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Embark on Epic Journeys in the World of Anime! From adrenaline-pumping
          action to poignant narratives, lose yourself in the mesmerizing realm
          of anime with our vast library of titles, catering to both seasoned
          fans and newcomers alike.
        </motion.p>
      </div>
      <div className="other">
        <button className="share" onClick={handleClick}>
          SHARE
        </button>
      </div>
    </div>
  );
};
