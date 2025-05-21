import Image from "next/image";

import Typewriter from "./Typewriter";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-green-800 flex flex-col items-center ">
      {/* Bannière avec image de fond */}
      <div className="relative w-full max-w-7xl mx-auto border-b-stone-950">
        <img
          src="/PHOTO_BOIS/banner.webp"
          alt="Photo du magasin"
          className="w-full h-[420px] object-cover object-center  shadow-lg"
        />
        {/* Logo circulaire */}
        <div className="absolute left-1/2 top-12 -translate-x-1/2 flex flex-col items-center">
          <div className="bg-gray-200 rounded-full w-28 h-28 flex items-center justify-center shadow-lg border-4 border-white">
            {/* Remplace par un vrai logo si tu en as un */}
            <span className="text-xl font-bold text-gray-700">Logo</span>
          </div>
          <h1 className="mt-6 text-7xl font-bold text-white text-center drop-shadow-lg">Autour de</h1>
          <h2 className="text-xl text-white text-center drop-shadow">l'atelier du bois</h2>
        </div>
        {/* Menu */}
        <nav className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-row items-center gap-6 bg-transparent">
          <a href="#" className="text-white text-lg font-normal border-b-2 border-white  whitespace-nowrap">Accueil</a>
          <a href="#" className="text-white text-lg font-normal hover:underline hover:underline-offset-4 whitespace-nowrap">Produits</a>
          <a href="#" className="text-white text-lg font-normal hover:underline hover:underline-offset-4 whitespace-nowrap">Mes créations</a>
          <a href="#" className="text-white text-lg font-normal hover:underline hover:underline-offset-4 whitespace-nowrap">A propos de l'atelier</a>
          <a href="#" className="text-white text-lg font-normal hover:underline hover:underline-offset-4 whitespace-nowrap">Contact</a>
        </nav>
      </div>

      {/* Section Actualités */}
      <section className="w-full max-w-7xl bg-[#7c6a58] mt-0 py-16 flex flex-col items-center ">
        <h2 className="text-3xl text-black font-bold text-center mb-8">
          Les <span className="text-green-700">Actualités</span>
        </h2>
        {/* Ajoute ici le contenu des actualités */}
      </section>

      {/* Section Mon atelier */}
      <section className="w-full max-w-7xl bg-[#7c6a58] py-16 flex flex-col items-center ">
        <h2 className="text-3xl text-black font-bold text-center mb-8">
          Mon <span className="text-green-700">atelier</span>
        </h2>
        <div className="mb-8">
          <Typewriter />
        </div>
        <div className="w-full max-w-6xl grid grid-cols-3 gap-8 mx-auto">
          <div className="bg-green-800 text-white rounded border border-black flex flex-col items-center justify-center h-72 w-full">
            <span className="text-2xl font-bold text-center mb-2">Tournage d'une toupie en bois</span>
            <span className="text-center">Toupie en chêne avec vernis à la cire d'abeille</span>
          </div>
          <img src="/PHOTO_BOIS/DSC_0023.webp" alt="Atelier 1" className="object-cover h-72 w-full" />
          <div className="h-72 w-full  overflow-hidden flex items-center justify-center p-0 m-0">
            <video src="/PHOTO_BOIS/DSC_0025.mp4" autoPlay muted loop playsInline className="h-full w-full object-cover -rotate-90 block" />
          </div>
          <img src="/PHOTO_BOIS/DSC_0030.webp" alt="Atelier 3" className="object-cover h-72 w-full" />
          <div className="h-72 w-full  overflow-hidden flex items-center justify-center p-0 m-0">
            <video src="/PHOTO_BOIS/DSC_0031.mp4" autoPlay muted loop playsInline className="h-full w-full object-cover -rotate-90 block" />
          </div>
          <img src="/PHOTO_BOIS/DSC_0044.webp" alt="Atelier 3" className="object-cover h-72 w-full" />
        </div>
      </section>

      {/* Section Les articles */}
      <section className="w-full bg-[#7c6a58] max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          Les <span className="text-green-800">articles</span>
        </h2>
        <p className="text-center text-xl mb-8">Le courrier picard</p>
        <div className="w-full mb-12">
          <video src="/PHOTO_BOIS/ARTICLE_VIDEO.mp4" autoPlay muted loop playsInline className="h-96 w-full object-cover block" />
        </div>
        <div className="w-full grid grid-cols-3 gap-8 mx-auto max-w-6xl">
          <img src="/PHOTO_BOIS/dsc-0118.webp" alt="Article 1" className="object-cover h-72 w-full block" />
          <img src="/PHOTO_BOIS/DSC_0093.webp" className="object-cover h-72 w-full block" />
          <img src="/PHOTO_BOIS/DSC_0077.webp" className="object-cover h-72 w-full block" />
          <img src="/PHOTO_BOIS/DSC_0099.webp" alt="Article 1" className="object-cover h-72 w-full block" />
          <img src="/PHOTO_BOIS/DSC_0103.webp" className="object-cover h-72 w-full block" />
          <img src="/PHOTO_BOIS/DSC_0096.webp" className="object-cover h-72 w-full block" />
        </div>
      </section>

      {/* Section Contactez-moi */}
      <section className="w-full max-w-7xl mx-auto flex flex-col items-center bg-[#7c6a58]">
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-12 bg-[#7c6a58] py-12 rounded">
          {/* Image à gauche */}
          <img
            src="/PHOTO_BOIS/dsc-0125.webp"
            alt="Horaires d'ouverture"
            className="w-64 h-auto object-contain rounded shadow"
          />
          {/* Bloc texte + bouton à droite */}
          <div className="flex-1 max-w-xl flex flex-col items-center md:items-start">
            <h2 className="text-3xl font-bold text-green-700 mb-4">Contactez-moi</h2>
            <p className="text-white text-lg mb-6 text-center md:text-left">
              Une demande particulière ou une question sur un objet ?<br />
              N'hésitez pas à me contacter !
            </p>
            <a
              href="mailto:ton@email.fr"
              className="px-6 py-2 border border-green-700 text-green-700 rounded hover:bg-green-700 hover:text-white transition"
            >
              Me contacter
            </a>
          </div>
        </div>
        {/* Copyright */}
        <p className="text-center  text-white mt-8 mb-2">Copyright © 2023 Herent Aleksandre</p>
      </section>
    </div>
  );
}
