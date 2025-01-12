import Image from "next/image";

const index = () => {
    return (
        <div className='mx-auto max-w-7xl sm:py-4 lg:px-8 mb-40'>
            <h2 className="text-4xl sm:text-6xl font-bold text-center">
                Our team is dedicated to <br /> empowering your success.
            </h2>
            <h3 className="text-2xl font-medium text-center pt-10 opacity-50">
                At Hiversoft, we bring together exceptional talent and cutting-edge technology <br /> to deliver innovative solutions that drive your business forward.
            </h3>
            <div className='flex justify-center my-16'>
                <Image src="https://static.hiversoft.com/hiversoft-feature2.png" alt="office-image" height={350} width={750} className="rounded-lg shadow-lg" />
            </div>
        </div>
    )
}

export default index;
