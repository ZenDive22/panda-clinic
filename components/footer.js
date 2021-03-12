import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";

export default function Footer() {
    return (
        <footer className="bg-accent-1 border-t border-accent-2">
            <Container>
                <div className="py-24 flex flex-col lg:flex-row items-center">
                    <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
                        Pain doesn't wait. <br /> Book a session today!
                    </h3>
                    <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
                        <a
                            href="https://pandaclinic.ca/locations"
                            className="mx-3 bg-black hover:bg-white hover:text-black border rounded-lg border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
                        >
                            Book Online
                        </a>
                    </div>
                </div>
                <div className="py-1 flex justify-center flex-col lg:flex-row-reverse items-center text-sm">
                    {" "}
                    Panda Clinic © 2018. All rights reserved
                </div>
            </Container>
        </footer>
    );
}
