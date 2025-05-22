import React from "react";
import Logo from "./Logo";

const Header = () => (
    <div className="relative w-full max-w-7xl mx-auto h-[600px] flex flex-col items-center justify-center">
        {/* Image de fond */}
        <img
            src="/PHOTO_BOIS/banner.webp"
            alt="Photo du magasin"
            className="w-full h-full object-cover object-[center_45%] shadow-lg absolute top-0 left-0 z-0 rounded-none"
        />
        {/* Logo */}
        <div className="absolute left-1/2 top-8 -translate-x-1/2 flex flex-col items-center z-10">
            <img src="/PHOTO_BOIS/font_logo.png" alt="Logo" className="absolute top-0 left-0 w-72 h-w-72 object-contain " />
            <Logo />
        </div>
        {/* Titre et sous-titre */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/4 flex flex-col items-center z-10">
            <h1 className="text-7xl font-bold text-white text-center drop-shadow-lg">Autour de</h1>
            <h2 className="text-4xl text-white text-center drop-shadow">l'atelier du bois</h2>
        </div>
        {/* Navbar */}
        <nav className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-row items-center gap-8 bg-white/70 rounded-full px-8 py-2 shadow z-10 backdrop-blur-md">
            <a href="/" className="text-green-900 text-lg font-normal hover:underline hover:underline-offset-4 transition whitespace-nowrap">Accueil</a>
            <a href="/produits" className="text-green-900 text-lg font-normal hover:underline hover:underline-offset-4 transition whitespace-nowrap">Produits</a>
            <a href="#" className="text-green-900 text-lg font-normal hover:underline hover:underline-offset-4 transition whitespace-nowrap">Mes créations</a>
            <a href="/apropos" className="text-green-900 text-lg font-normal hover:underline hover:underline-offset-4 transition whitespace-nowrap">À propos de l'atelier</a>
            <a href="/contact" className="text-green-900 text-lg font-normal hover:underline hover:underline-offset-4 transition whitespace-nowrap">Contact</a>
        </nav>
    </div>
);

export default Header;