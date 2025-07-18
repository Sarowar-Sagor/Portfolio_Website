import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import { motion } from "motion/react";

const About = () => {

    return (
        <motion.div id="about" className="w-full px-[12%] scroll-mt-18"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >

            <motion.h5 className="text-center text-xl"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >Introduction</motion.h5>

            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-center text-5xl">About me
            </motion.h2>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col lg:flex-row items-center gap-20 my-12">

                {/* <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="w-64 sm:w-80 max-w-none">
                    <Image className="rounded-3xl" src={assets.profile_image} alt="user"></Image>
                </motion.div> */}

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="flex-1">
                    <p className="max-w-2xl mb-4">Aspiring front-end / full-stack developer with a strong foundation in JavaScript, React.js, and modern UI libraries like Tailwind CSS
                        and DaisyUI. Experienced in building responsive and user-friendly web interfaces, with additional knowledge in backend
                        technologies such as Express.js and databases like MongoDB and MySQL. I have a solid understanding of data structures
                        and algorithms, with hands-on experience in problem-solving across various online judges. I focus on creating clean, responsive user interfaces using modern technologies and best practices.</p>

                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-2xl">
                        {infoList.map(({ icon, iconDark, description, title }, index) => (
                            <motion.li
                                whileInView={{ scale: 1.01 }}
                                className="border-2 border-gray-400 rounded-2xl p-6 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-2xl" key={index}>
                                <Image className="w-7" src={icon} alt={title}></Image>
                                <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
                                <p className="text-gray-600 text-sm">{description}</p>
                            </motion.li>
                        ))}
                    </motion.ul>

                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.3, delay: 0.5 }}
                        className="my-6 text-gray-600">Tools I use</motion.h3>

                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1.5, delay: 0.6 }}
                        className="flex items-center gap-3 sm:gap-5">
                        {
                            toolsData.map((tool, index) => (
                                <motion.li
                                    whileHover={{ scale: 1.1 }}
                                    className="w-12 sm:w-14 aspect-square border border-gray-500 rounded-xl cursor-pointer hover:-translate-y-1 duration-500 flex justify-center items-center hover:shadow-2xl" key={index}>
                                    <Image title={tool.title} src={tool.img} alt="Tool" className="w-5 sm:w-7"></Image>
                                </motion.li>
                            ))
                        }
                    </motion.ul>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default About;