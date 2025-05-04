import { assets } from "@/assets/assets";
import moment from "moment";
import Image from "next/image";

const Footer = () => {
    return (
        <div className="mt-10">
            <div className="text-center">
                <Image src={assets.logo} alt="logo" className="w-16 h-12 mx-auto mb-2"></Image>

                <div className="flex items-center gap-2 mx-auto w-max">
                    <Image src={assets.mail_icon} alt="mail" className="w-6"></Image>
                    sarowarsagor760@gmail.com
                </div>
            </div>

            <div className="text-center sm:flex items-center justify-between border-t border-gray-500 mt-10 py-5 mx-[8%]">
                <p>&copy; {moment().format('YYYY')} Sarowar Alam Sagor. All rights reserved.</p>
                <ul className="flex items-center gap-10 justify-center">
                    <li>
                        <a className="text-blue-600" target="_blank" href="https://github.com/Sarowar-Sagor">Github</a>
                    </li>
                    <li>
                        <a className="text-blue-600" target="_blank" href="https://www.linkedin.com/in/sarowar-alam-sagor/">LinkedIn</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;