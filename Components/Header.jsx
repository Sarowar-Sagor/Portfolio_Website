import { assets } from "@/assets/assets";
import Image from "next/image";
import { motion } from "motion/react";
import HeroSection from "./HeroSection";

const Header = () => {
    return (
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center justify-center gap-3 py-10 md:py-20 w-11/12">

            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
            >
                <Image src={assets.sagor} alt="" className="w-40 aspect-square rounded-full"></Image>
            </motion.div>

            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex gap-2 text-xl md:text-2xl mb-3 font-Ovo">Hi! I'm Sarowar Alam Sagor <Image src={assets.hand_icon} alt="" className="w-6"></Image>
            </motion.h2>

            <motion.h1
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo"><HeroSection/>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="max-w-2xl mx-auto font-Ovo">I’m a passionate front-end / full-stack developer. While I don’t have professional experience yet, I’m actively building a fully functional, high-quality website to showcase my skills and dedication.
            </motion.p>


            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                <motion.a
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2" href="#contact"> Contact me <Image src={assets.right_arrow_white} alt="" className="w-4 mt-1.5"></Image></motion.a>

                <motion.a
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.1 }}
                    className="flex items-center gap-2 rounded-full px-10 py-3 border border-gray-500" href="/Sarowar-Alam-Sagor-CV.pdf" download> My Resume <Image src={assets.download_icon} alt="" className="w-4"></Image></motion.a>
            </div>
        </div>
    );
};

export default Header;