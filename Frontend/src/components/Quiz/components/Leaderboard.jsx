import React, { useState } from "react";
import "./Leaderboard.css";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Reveal = ({ children, delay }) => {
  const mainControls = useAnimation();
  const slideControls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      mainControls.start('visible');
      slideControls.start('visible');
    }
  }, [mainControls, slideControls, inView]);

  return (
    <div ref={ref} style={{ position: 'relative', overflow: 'hidden' }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

const Leaderboard = (props) => {
  var i = 0;

  return (
    <div className="leaderboard-container">
      <h1 className="leaderboard-heading">Leaderboard</h1>
      <div className="leaderboard-header">
        <div className="leaderboard-heading-name">Name</div>
        <div className="leaderboard-heading-rank">Rank</div>
        <div className="leaderboard-heading-score">Score</div>
      </div>
      <Reveal>
        <div className="leaderboard-values">
          {props.data &&
            props.data.map((item, index) => {
              return (
                <>
                  <div
                    className="leaderboard-username"
                    style={props.username === item[0] ? { color: "green" } : {}}
                  >
                    {item[0]}
                  </div>
                  <div className="leaderboard-rank">{index + 1}</div>
                  <div className="leaderboard-score">{item[1]}</div>
                </>
              );
            })}
        </div>
      </Reveal>
    </div>
  );
};

export default Leaderboard;