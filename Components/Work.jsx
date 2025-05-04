import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import { motion } from "motion/react";

const Work = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id="work" className="px-[8%] pb-6 scroll-mt-20">

            <motion.h4
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center text-lg mb-2">My portfolio
            </motion.h4>

            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-center text-5xl">My latest work
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="text-center max-w-2xl mx-auto mt-5 mb-12">Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end development.
            </motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {
                    workData.map((project, index) => (
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.5 }}
                            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group" key={index} style={{ backgroundImage: `url(${project.bgImage})` }}>
                            <div className="w-10/12 bg-white rounded-md absolute bottom-5 left-2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                                <div>
                                    <h2 className="font-semibold">{project.title}</h2>
                                    <p className="text-sm text-gray-700">{project.description}</p>
                                </div>
                                <div className="border rounded-full w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300">
                                    <Image src={assets.send_icon} alt="send" className="w-5"></Image>
                                </div>
                            </div>

                        </motion.div>
                    ))
                }
            </motion.div>
        </motion.div>
    );
};

export default Work;