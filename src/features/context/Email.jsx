import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Email = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm("service_cgahbwt", "template_rvciq7f", form.current, {
                publicKey: "R17WgOxUlMGmc96c1",
            })
            .then(
                () => {
                    console.log("SUCCESS!");
                },
                (error) => {
                    console.log("FAILED...", error.text);
                }
            );
    };

    return (
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
                <label className="font-semibold">Name</label>
                <input
                    type="text"
                    name="user_name"
                    className=" rounded-md bg-blue-gray-700 py-1 px-4 focus:outline-none focus:scale-105 transition-all duration-700 focus:shadow-menu"
                    placeholder="mopano"
                />
            </div>
            <div className="flex flex-col gap-1">
                <label className="font-semibold">Email</label>
                <input
                    type="email"
                    name="user_email"
                    className=" rounded-md bg-blue-gray-700 py-1 px-4 focus:outline-none focus:scale-105 transition-all duration-700 focus:shadow-menu"
                    placeholder="p.r.7.norouzi@gmail.com"
                />
            </div>
            <div className="flex flex-col gap-2">
                <label className="font-semibold">Message</label>
                <textarea
                    name="message"
                    className=" rounded-md bg-blue-gray-700 h-32 p-2 focus:outline-none focus:scale-105 transition-all duration-700 focus:shadow-menu"
                    placeholder="Hey Parsa, ..."
                />
            </div>
            <input
                type="submit"
                value="Send Email"
                className=" bg-item rounded-md cursor-pointer w-32 py-2 self-center mt-2 font-semibold hover:bg-me transition-all duration-500 hover:scale-105 hover:shadow-menu text-center"
            />
        </form>
    );
};

export default Email;
