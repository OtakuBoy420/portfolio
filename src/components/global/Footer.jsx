import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="flex w-full items-center justify-center bg-black/25">
      <div className="flex w-full max-w-7xl flex-col px-4 text-white">
        <div className="flex flex-col">
          <div className="mt-20 flex flex-row justify-between">
            <a href="#about" className="text-dimWhite hidden cursor-pointer uppercase hover:text-white md:block">
              About
            </a>
            <a href="#experience" className="text-dimWhite hidden cursor-pointer uppercase hover:text-white md:block">
              Work
            </a>

            <a href="#contact" className="text-dimWhite hidden cursor-pointer uppercase hover:text-white md:block">
              Contact
            </a>
            <div className="flex flex-col">
              <a href="mailto:oliverzeymer@gmail.com" className="text-dimWhite cursor-pointer hover:text-white">
                oliverzeymer@gmail.com
              </a>
              <a href="tel:+4535325204" className="text-dimWhite cursor-pointer uppercase hover:text-white">
                +45 53 32 52 04
              </a>
            </div>
            <div className="flex flex-row items-center justify-between space-x-8">
              <a href="https://github.com/OtakuBoy420" rel="noreferrer" target="_blank">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/oliver-zeymer-643aaa267" rel="noreferrer" target="_blank">
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          <hr className="border-dimWhite my-12" />
          <h2 className="text-dimWhite mb-12 w-full text-center text-xl font-bold sm:text-2xl">Oliver Zeymer - Portfolio 2023</h2>
        </div>
      </div>
    </footer>
  );
}
