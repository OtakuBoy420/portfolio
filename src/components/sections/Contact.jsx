import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import CreateSection from "../hoc/CreateSection";
import styles from "../../constants/styles";
import { EarthCanvas } from "../canvas";
import { slideInContact } from "../../utils/motion";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Contact() {
  const notify = () =>
    toast("🚀 Message sent! Check your email for a reply from me soon.", {
      theme: "dark",
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  const [loading, setLoading] = useState(false);
  const mailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("You must enter your name").nullable(),
    email: Yup.string().matches(mailRegExp, "You must enter a valid email").required("You must enter your email").nullable(),
    message: Yup.string().required("You must enter a message").min(10, "Message must be at least 10 characters").nullable(),
  });

  return (
    <article className="flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row">
      <motion.div variants={slideInContact("left", "tween", 0.2, 1)} className="flex-[0.75] rounded-2xl bg-black-100 p-8">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>
        <Formik
          validateOnChange={true}
          validateOnBlur={true}
          initialValues={{ name: "", email: "", message: "" }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            setLoading(true);
            emailjs
              .send(
                "service_93u5f7s",
                "template_v0df3ne",
                {
                  from_name: values.name,
                  from_email: values.email,
                  message: values.message,
                },
                "_j7OujbzobqSjHLyV"
              )
              .then(
                () => {
                  notify();
                  setLoading(false);
                  resetForm();
                },
                (error) => {
                  console.log(error);
                  setLoading(false);
                }
              );
          }}>
          {({ errors, touched, handleChange, handleBlur }) => (
            <Form noValidate className="mt-12 flex flex-col gap-8">
              <label className="relative flex flex-col">
                <span className="mb-4 font-medium text-white">Your Name</span>
                <Field
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                  name="name"
                  placeholder="What's your name?"
                  className={`placeholder:text-dimWhite rounded-lg border-2 border-transparent bg-secondary p-4 font-medium shadow-lg focus:outline-none focus:ring-0 
                  ${errors.name && touched.name ? "!border-red-500" : ""}`}
                />
                <ErrorMessage name="name" component="div" className="absolute -bottom-6 font-semibold tracking-tight text-red-500" />
              </label>
              <label className="relative flex flex-col">
                <span className="mb-4 font-medium text-white">Your Email</span>
                <Field
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="email"
                  name="email"
                  placeholder="What's your email?"
                  className={`placeholder:text-dimWhite rounded-lg border-2 border-transparent bg-secondary p-4 font-medium shadow-lg focus:outline-none focus:ring-0 
                  ${errors.email && touched.email ? "!border-red-500" : ""}`}
                />
                <ErrorMessage name="email" component="div" className="absolute -bottom-6 font-semibold tracking-tight text-red-500" />
              </label>
              <label className="relative flex flex-col">
                <span className="mb-4 font-medium text-white">Your Message</span>
                <Field
                  onChange={handleChange}
                  onBlur={handleBlur}
                  rows="7"
                  type="text"
                  name="message"
                  placeholder="What do you want to say?"
                  className={`placeholder:text-dimWhite resize-none rounded-lg border-2 border-transparent bg-secondary p-4 font-medium shadow-lg focus:outline-none focus:ring-0 
                  ${errors.message && touched.message ? "!border-red-500" : ""}`}
                />
                <ErrorMessage name="message" component="div" className="absolute -bottom-6 font-semibold tracking-tight text-red-500" />
              </label>
              <button type="submit" disabled={loading} className="w-fit rounded-xl bg-secondary py-3 px-8 font-bold text-white shadow-md outline-none hover:brightness-110">
                {loading ? "Sending..." : "Send"}
              </button>
            </Form>
          )}
        </Formik>
      </motion.div>
      <motion.div variants={slideInContact("right", "tween", 0.2, 1)} className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1">
        <div className="h-full w-full cursor-grab active:cursor-grabbing">
          <EarthCanvas />
        </div>
      </motion.div>
    </article>
  );
}

export default CreateSection(Contact, "contact");
