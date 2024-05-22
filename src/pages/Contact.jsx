import { CiLocationOn, CiPhone, CiMail } from "react-icons/ci";
import Email from "../features/context/Email";
const Contact = () => {
    return (
        <div className="bg-rightSide rounded-l-3xl  text-header gap-6 px-16 py-10 font-roberto overflow-scroll phone:py-10">
            <h3 className="text-3xl font-bold">Contact</h3>
            <div className="grid grid-cols-contact gap-10 mt-10 phone:grid-rows-contact phone:grid-cols-none">
                <div className="flex flex-col gap-3">
                    <div className="py-4 px-3 bg-gray-700 rounded-lg text-center flex flex-col justify-center items-center gap-2">
                        <CiLocationOn className="text-item text-5xl " />
                        <p className="font-semibold">Tehran</p>
                    </div>
                    <div className="py-4 px-3 bg-gray-700 rounded-lg text-center flex flex-col justify-center items-center gap-2">
                        <CiPhone className="text-item text-5xl " />
                        <p className="font-semibold">+98 939-8280-260</p>
                    </div>
                    <div className="py-4 px-3 bg-gray-700 rounded-lg text-center flex flex-col justify-center items-center gap-2">
                        <CiMail className="text-item text-5xl " />
                        <p className="font-semibold">p.r.7.norouzi@gmail.com</p>
                    </div>
                </div>
                <div>
                    <Email />
                </div>
            </div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1619.648019328473!2d51.31520981285204!3d35.71893723420904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzXCsDQzJzA4LjIiTiA1McKwMTgnNTkuNSJF!5e0!3m2!1sen!2s!4v1714836598791!5m2!1sen!2s"
                className=" border-none rounded-lg outline-none mt-12 h-96 w-full phone:order-first"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
};

export default Contact;
