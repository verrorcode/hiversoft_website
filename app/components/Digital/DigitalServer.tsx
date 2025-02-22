import Image from "next/image";

export default function DigitalServer() {
  return (
    <div className="mx-2">
      <div className='mx-auto max-w-7xl px-4 my-20 pb-20 lg:pb-20 lg:px-8 bg-digital rounded-3xl bg-blue relative'>
        <div className='grid grid-cols-1 lg:grid-cols-2 my-16'>
          <div className="pt-24 lg:pl-24">
            <h1 className="text-lg font-normal text-white mb-5 tracking-widest text-center lg:text-start">WHO WE ARE</h1>
            <h2 className="text-4xl sm:text-6xl font-bold text-white mb-8 leading-snug text-center lg:text-start">
              We build intelligent <br /> solutions that drive <br /> your digital success.
            </h2>
            <div className="text-center lg:text-start" id="contact-trigger">
              {/* Contact button will be hydrated by client wrapper */}
            </div>
          </div>

          <div>
            <div className="lg:absolute girldoodle">
              <Image 
                src="https://static.hiversoft.com/girldoodle.svg" 
                alt="Digital Solutions Illustration"
                width={815} 
                height={691}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}