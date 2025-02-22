"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import DigitalServer from "./DigitalServer";

const Contactusform = dynamic(() => import("../Navbar/Contactus"), { ssr: false });

export default function Digital() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <DigitalServer />
      <Contactusform 
        showTriggerButton={false}
        isControlled={true}
        externalIsOpen={isContactModalOpen}
        onExternalClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
}