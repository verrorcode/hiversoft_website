import Image from "next/image";

const Dedicated = () => {
    return (
        <div className="relative">

            <Image src="https://static.hiversoft.com/spiral.svg" height={272} width={686} alt="spiral-design" className="absolute left-0 hidden lg:block -z-10" />

            <div className='mx-auto max-w-7xl px-4 my-5 sm:py-16 lg:px-8'>
                <div className='grid grid-cols-1 md:grid-cols-2 my-16'>

                    {/* COLUMN-1 */}
                    <div>
                        <Image src="https://static.hiversoft.com/man.svg" alt="man-icon" width={416} height={530} className="mx-auto md:mx-0" />
                    </div>

                    {/* COLUMN-2 */}
                    <div className="relative">
                        <Image src="https://static.hiversoft.com/comma.svg" alt="comma-image" width={200} height={106} className="absolute comma-pos hidden lg:block" />
                        <h2 className="text-4xl lg:text-55xl pt-4 font-bold sm:leading-tight mt-5 text-center lg:text-start">Dedicated to delivering AI solutions that empower businesses.</h2>
                        <p className="font-medium text-lightblack pt-14 text-2xl mt-5 text-center lg:text-start">Hiversoft enabled the Kontra AI platform to maximize its potential in intelligent automation and machine learning, driving innovation and enhancing operational excellence.</p>
                        <p className="text-2xl font-semibold mt-12 lg:ml-32 preline pt-4 text-center lg:text-start"> Alex Monroe, Kontra AI</p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Dedicated;
