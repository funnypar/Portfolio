import { CiLocationOn, CiPhone, CiMail } from "react-icons/ci";
const Contact = () => {
    return (
        <div className="bg-rightSide rounded-l-3xl  text-header gap-6 px-16 py-10 font-roberto overflow-hidden">
            <h3 className="text-3xl font-bold">Contact</h3>
            <div className="grid grid-cols-contact gap-10 mt-10">
                <div className="flex flex-col gap-3">
                    <div className="py-5 px-3 bg-gray-700 rounded-lg text-center flex flex-col justify-center items-center gap-2">
                        <CiLocationOn className="text-item text-5xl " />
                        <p className="font-semibold">Tehran</p>
                    </div>
                    <div className="py-5 px-3 bg-gray-700 rounded-lg text-center flex flex-col justify-center items-center gap-2">
                        <CiPhone className="text-item text-5xl " />
                        <p className="font-semibold">+98 939-8280-260</p>
                    </div>
                    <div className="py-5 px-3 bg-gray-700 rounded-lg text-center flex flex-col justify-center items-center gap-2">
                        <CiMail className="text-item text-5xl " />
                        <p className="font-semibold">p.r.7.norouzi@gmail.com</p>
                    </div>
                </div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d742.6129454772357!2d51.31637937535572!3d35.7188356295569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1714828867144!5m2!1sen!2s"
                    className=" border-none rounded-lg outline-none h-full w-full"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
};

export default Contact;
