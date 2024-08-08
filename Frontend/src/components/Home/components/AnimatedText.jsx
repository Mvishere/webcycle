import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Reveal = ({ children }) => {
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
                    hidden: { opacity: 0, y: 75, x: -30 },
                    visible: { opacity: 1, y: 0, x: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.25 }}
            >
                {children}
            </motion.div>
            <motion.div
                variants={{
                    hidden: { left: 0, bottom: 0 },
                    visible: { left: '100%', bottom: "100%" },
                }}
                initial="hidden"
                animate={slideControls}
                transition={{ duration: 0.5, ease: 'easeIn' }}
                style={{
                    position: 'absolute',
                    top: 4,
                    bottom: 4,
                    left: 0,
                    right: 0,
                    backgroundColor: "green",
                    zIndex: 20,
                }}
            />
        </div>
    );
};

export default Reveal;

