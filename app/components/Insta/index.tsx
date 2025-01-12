import Image from "next/image";
import Link from "next/link";

const Insta = () => {
    return (
        <div className="mx-auto max-w-2xl pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="mt-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

                {/* First Image */}
                <div className="mx-auto imageContainer relative w-[306px] h-[306px] overflow-hidden rounded-lg -mb-[70px]">
                    <div className="w-full h-full relative">
                        <Image
                            src="/https://static.hiversoft.com/ai10.jpg"
                            alt="instaOne"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <Link href={"https://instagram.com"} target="_blank">
                        <button
                            className="hidden absolute z-10 text-white font-semibold"
                            style={{
                                top: "45%",
                                right: "45%",
                            }}
                        >
                            <Image
                                src="https://static.hiversoft.com/instagram.svg"
                                alt="instagram"
                                width={36}
                                height={36}
                            />
                        </button>
                    </Link>
                </div>

                {/* Second Image */}
                <div className="mx-auto imageContainer relative w-[306px] h-[306px] overflow-hidden rounded-lg -mb-[70px]">
                    <div className="w-full h-full relative">
                        <Image
                            src="https://static.hiversoft.com/ai11.jpg"
                            alt="instaTwo"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <Link href={"https://instagram.com"} target="_blank">
                        <button
                            className="hidden absolute z-10 text-white font-semibold"
                            style={{
                                top: "45%",
                                right: "45%",
                            }}
                        >
                            <Image
                                src="https://static.hiversoft.com/instagram.svg"
                                alt="instagram"
                                width={36}
                                height={36}
                            />
                        </button>
                    </Link>
                </div>

                {/* Third Image */}
                <div className="mx-auto imageContainer relative w-[306px] h-[306px] overflow-hidden rounded-lg -mb-[70px]">
                    <div className="w-full h-full relative">
                        <Image
                            src="https://static.hiversoft.com/insta3.png"
                            alt="instaThree"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <Link href={"https://instagram.com"} target="_blank">
                        <button
                            className="hidden absolute z-10 text-white font-semibold"
                            style={{
                                top: "45%",
                                right: "45%",
                            }}
                        >
                            <Image
                                src="https://static.hiversoft.com/instagram.svg"
                                alt="instagram"
                                width={36}
                                height={36}
                            />
                        </button>
                    </Link>
                </div>

                {/* Fourth Image */}
                <div className="mx-auto imageContainer relative w-[306px] h-[306px] overflow-hidden rounded-lg -mb-[70px]">
                    <div className="w-full h-full relative">
                        <Image
                            src="https://static.hiversoft.com/ai13.jpg"
                            alt="instaFour"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <Link href={"https://instagram.com"} target="_blank">
                        <button
                            className="hidden absolute z-10 text-white font-semibold"
                            style={{
                                top: "45%",
                                right: "45%",
                            }}
                        >
                            <Image
                                src="https://static.hiversoft.com/instagram.svg"
                                alt="instagram"
                                width={36}
                                height={36}
                            />
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Insta;
