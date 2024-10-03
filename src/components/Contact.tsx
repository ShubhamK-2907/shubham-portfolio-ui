import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { abstergo } from "../assets/index";

const Contact = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const [loading, setLoading] = useState(false);

    const onSubmit = async (data: any) => {
        if (!data.name) {
            alert("Please enter your name");
            return;
        }

        if (!data.email) {
            alert("Please enter your email");
            return;
        }

        if (!data.message) {
            alert("Please enter a message");
            return;
        }

        setLoading(true);

        try {
            await emailjs.send(
                "service_z8cniyv",
                "template_7phkhik",
                {
                    from_name: data.name,
                    to_name: "Shubham",
                    from_email: data.email,
                    to_email: "shubhamk2907@gmail.com",
                    message: data.message,
                },
                "XQkifjhdV2bicT1-3"
            );

            setLoading(false);
            alert("Thank you for connecting. I will get back to you soon.");
            reset();
        } catch (error) {
            alert("Sorry, something went wrong. Please try again later.");
            setLoading(false);
            console.log(error);
        }
    };

    return (
        <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                className="flex-[0.75]  p-8 rounded-2xl"
            >
                <h3 className={styles.sectionHeadText}>Let's Connect..</h3>

                <form
                    className="mt-12 flex flex-col gap-8"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">
                            Your Name
                        </span>
                        <input
                            {...register("name")}
                            type="text"
                            placeholder="What's your name?"
                            style={{ backgroundColor: "#840c24" }}
                            className="py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
                        />
                    </label>

                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">
                            Your Email
                        </span>
                        <input
                            {...register("email")}
                            type="email"
                            placeholder="What's your email?"
                            style={{ backgroundColor: "#840c24" }}
                            className="py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
                        />
                    </label>

                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">
                            Your Message
                        </span>
                        <textarea
                            {...register("message")}
                            rows={7}
                            style={{ backgroundColor: "#840c24" }}
                            placeholder="What's do you want to say?"
                            className="py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
                        />
                    </label>

                    <button
                        type="submit"
                        style={{ backgroundColor: "#840c24" }}
                        className="py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
                    >
                        {loading ? "Sending..." : "Send"}
                    </button>
                </form>
            </motion.div>

        </div>
    );
};

export default SectionWrapper(Contact, "contact");
