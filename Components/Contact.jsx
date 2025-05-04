import { assets } from "@/assets/assets";
import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";

const Contact = () => {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "99b3d8dd-b3f8-4289-ad6e-c006239757a0");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            // console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id="contact" className='py-8 px-[12%] w-full scroll-mt-10'>

            <motion.h4
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center text-lg mb-2">Connect with me</motion.h4>

            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-center text-5xl">Get in touch</motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="text-center max-w-2xl mx-auto mt-5 mb-8">I'd love to hear from you! If you have any questions, comments or feedback, please use the form below.</motion.p>

            <motion.form
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                onSubmit={onSubmit} className="max-w-2xl mx-auto bg-orange-100 p-4">
                <div className="flex sm:flex-row flex-col gap-6 my-6">

                    <motion.input
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.1, duration: 0.6 }}
                        name="name" type="text" placeholder="Enter your name" required className="flex-1 outline-none p-3 border-[1px] border-gray-700 rounded-md" />

                    <motion.input
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.3, duration: 0.6 }}
                        name="email" type="email" placeholder="Enter your email" required className="flex-1 outline-none p-3 border-[1px] border-gray-700 rounded-md" />
                </div>

                <motion.textarea
                initial={{y: 100, opacity: 0}}
                whileInView={{opacity: 1, y: 0}}
                transition={{delay: 1.4, duration: 0.6}}
                name="message" className="w-full p-4 outline-none border-[1px] border-gray-700 rounded-md mb-5" rows={"6"} placeholder="Enter your message" required></motion.textarea>

                <motion.button
                whileHover={{scale: 1.06}}
                transition={{duration: 0.4}}
                className="cursor-pointer hover:bg-black text-white rounded-full bg-black/70 py-3 px-8 w-max flex duration-700 gap-2 items-center mx-auto" type="submit">Submit now <Image src={assets.right_arrow_white} className="w-5 mt-1.5" alt="send"></Image> </motion.button>

                <p className="mt-3 text-green-500">{result}</p>
            </motion.form>
        </motion.div>
    );
};

export default Contact;