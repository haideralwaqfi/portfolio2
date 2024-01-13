"use client";
import { sendEmail } from "@/actions/sendEmail";
import { useSectionInView } from "@/app/lib/hooks";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import SubmitBtn from "./SubmitBtn";
import toast from "react-hot-toast";
export default function Contact() {
  const { ref, inView } = useSectionInView("Contact", 0.35);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center">
      <SectionHeading>contact me</SectionHeading>
      <p className="text-gray-700 dark:text-white/80">
        Please contact me directly at{" "}
        <a href="mailto:haideralwaqfi@gmail.com">haideralwaqfi@gmail.com</a> or
        through this form.
      </p>
      <form
        action={async (fromData) => {
          const { data, error } = await sendEmail(fromData);
          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Email sent successfully");
        }}
        className="mt-10 flex flex-col dark:text-black/80">
        <input
          name="senderEmail"
          required
          maxLength={500}
          type="email"
          placeholder="Your Email"
          className="h-14 px-4  rounded-lg border border-black/10 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all"
          id=""
        />
        <textarea
          name="message"
          required
          maxLength={500}
          className="h-52 my-3 rounded-lg border border-black/10 p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all"
          placeholder="Your Message..."
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
