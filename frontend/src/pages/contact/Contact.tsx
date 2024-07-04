import { Button, Heading, Input, Text, Textarea } from "@chakra-ui/react";
import { CgMail } from "react-icons/cg";
import { FaPhoneAlt, FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

interface IFormInput {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);

    toast.success("data send successfully");
    reset();
    // handle form submission
  };

  return (
    <section>
      <Toaster />
      <div className="flex align-middle justify-evenly items-center h-[80vh]">
        <div className="flex gap-40 shadow-xl w-full p-5 h-full pt-20">
          <div className="w-full flex flex-col items-end">
            <div>
              <Heading>Contact Me</Heading>
              <div className="flex align-middle justify-start items-center gap-3 my-5">
                <CgMail />
                <Text>rairanjit391@gmail.com</Text>
              </div>
              <div className="flex align-middle justify-start items-center gap-3 my-5">
                <FaPhoneAlt />
                <Text>9813990060</Text>
              </div>
              <div className="flex gap-4 my-5">
                <Link to="https://www.facebook.com" target="_blank">
                  <FaFacebook className="text-xl cursor-pointer" />
                </Link>
                <Link to="https://www.instagram.com/" target="_blank">
                  <FaInstagram className="text-xl cursor-pointer" />
                </Link>
                <Link
                  to="https://www.linkedin.com/in/ranjit-rai-79b29a22b/"
                  target="_blank"
                >
                  <ImLinkedin className="text-xl cursor-pointer" />
                </Link>
                <Link to="https://github.com/Ranjit0135" target="_blank">
                  <FaGithub className="text-xl cursor-pointer" />
                </Link>
              </div>
              <div>
                <Button colorScheme="green">
                  <Link
                    to="https://drive.google.com/file/d/1j83FR-CV8wyCw59kSlssm_4lpKMh0O7G/view"
                    target="_blank"
                  >
                    See My Resume
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 w-full mr-72">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-5 w-full"
            >
              <Input
                placeholder="Your Name"
                width="100%"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && <Text color="red">{errors.name.message}</Text>}

              <Input
                placeholder="Your Email"
                width="100%"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && <Text color="red">{errors.email.message}</Text>}

              <Textarea
                placeholder="Your Message"
                size="sm"
                {...register("message", { required: "Message is required" })}
              />
              {errors.message && (
                <Text color="red">{errors.message.message}</Text>
              )}

              <Button type="submit" colorScheme="green" width="100px">
                Send
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
