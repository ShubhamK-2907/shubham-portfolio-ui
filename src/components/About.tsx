import React from "react";
import { Tilt } from "react-tilt";
import { AnimatePresence, motion } from "framer-motion";
import { styles } from "../styles";
import { experiences, projects, services, technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { CanvasRevealEffect } from "./CanvasReveal";

const Card = ({
                  title,
                  icon,
                  children,
              }: {
    title: string;
    icon: React.ReactNode;
    children?: React.ReactNode;
}) => {
    const [hovered, setHovered] = React.useState(false);
    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative h-[30rem]"
        >
            <Icon className="absolute h-8 w-8 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-8 w-8 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-8 w-8 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-8 w-8 -bottom-3 -right-3 dark:text-white text-black" />

            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="h-full w-full absolute inset-0"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="relative z-20">
                <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full h-full mx-auto flex items-center justify-center">
                    {icon}
                </div>
                <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
                    {title}
                </h2>
            </div>
        </div>
    );
};

const SvgIcon = ({ alias, size = 24 }) => {
    const icon = [
        ...services,
        ...technologies,
        ...experiences,
        ...projects,
    ].find((item) => item.icon && item.icon === alias)?.icon;

    if (!icon) {
        console.error(`Icon with alias "${alias}" not found`);
        return null;
    }

    return (
        <motion.div
            className="text-center w-full mx-auto flex items-center justify-center"
            initial={{ opacity: 1, y: 0 }}
            whileHover={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
        >
            <img src={icon} alt={alias} className={`w-${size} h-${size}`} />
        </motion.div>
    );
};

export const Icon = ({ className, ...rest }: any) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={className}
            {...rest}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
        </svg>
    );
};

const About = () => {
    return (
        <>
            <motion.div variants={textVariant(0)}>
                <h2 className={styles.sectionHeadText}>Overview</h2>
            </motion.div>
            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
                A passionate JavaScript developer dedicated to creating innovative
                solutions for real-world problems. Shubham Kumar Sahoo here, a proud
                2022 graduate from PES University (CSE | BTech). Beyond my knack for
                coding, I absolutely thrive on gaming, Marvel, and travelling. Last 2
                years, hardcore focus on front-end development on top of React and
                Typescript with intermediate experience on backend technologies [NodeJs,
                Express, MongoDB, Go]. Worked with 4-5 member teams, operating at
                maximum capacity under strict deadlines as an Individual Contributor -
                thanks to the Startup Hustle🔥!
            </motion.p>
        </>
    );
};

export default SectionWrapper(About, "about");
