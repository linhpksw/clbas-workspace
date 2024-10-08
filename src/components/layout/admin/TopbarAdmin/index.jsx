'use client'
import Image from "next/image";
import Link from "next/link";
import { LuAlignJustify, LuSearch } from "react-icons/lu";
import MaximizeScreen from "./MaximizeScreen";
import dynamic from 'next/dynamic'
import { logoDarkImg, logoLightImg } from "@/assets/data/images";
import ProfileDropdown from "./ProfileDropdown";

const TopbarAdmin = () => {
    return (
        <header className="sticky top-0 z-40 flex h-18 w-full border-b border-default-200 bg-white dark:bg-default-50 lg:ps-64">
            <nav className="flex w-full items-center gap-4 px-6">
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="text-default-500 hover:text-default-600"
                        data-hs-overlay="#application-sidebar"
                        aria-controls="application-sidebar"
                        aria-label="Toggle navigation"
                    >
                        <LuAlignJustify size={24} />
                    </button>
                </div>

                <div className="flex lg:hidden">
                    <Link href="/">
                        <Image
                            src={logoDarkImg}
                            height={40}
                            width={130}
                            alt="logo"
                            className="flex h-10 w-full dark:hidden"
                            placeholder="blur"
                            priority
                        />
                        <Image
                            src={logoLightImg}
                            height={40}
                            width={130}
                            alt="logo"
                            className="hidden h-10 w-full dark:flex"
                            placeholder="blur"
                            priority
                        />
                    </Link>
                </div>

                <div className="ms-auto flex items-center gap-4">
                    <div className="hidden lg:flex">
                        <MaximizeScreen />
                    </div>

                    <div className="flex">
                        <ProfileDropdown />
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default TopbarAdmin;
