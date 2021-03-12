import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <div className="mb-20 mt-8">
            <Link href="/">
                <a className="hover:underline float-left">
                    <Image
                        src="/assets/blog/color_logo_transparent.png"
                        alt="Panda Clinic Logo"
                        height={70}
                        width={300}
                    />
                </a>
            </Link>
            <div className="flex flex-row justify-end text-lg md:text-lg font-medium">
                <a href="/" className="px-3 hover:opacity-75 hover:underline">
                    Home
                </a>
                <a
                    href="https://pandaclinic.ca/locations"
                    className="px-3 hover:opacity-75 hover:underline"
                >
                    Locations
                </a>
                <a
                    href="https://pandaclinic.ca/clinic-updates-for-new-safety-protocol"
                    className="px-3 hover:opacity-75 hover:underline"
                >
                    Safety
                </a>
                <a
                    href="https://pandaclinic.ca/services"
                    className="px-3 hover:opacity-75 hover:underline"
                >
                    Services
                </a>
                <a
                    href="https://pandaclinic.ca/health-team"
                    className="px-3 hover:opacity-75 hover:underline"
                >
                    Team
                </a>
            </div>
        </div>
    );
}
