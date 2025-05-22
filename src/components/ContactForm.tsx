"use client"

import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaFacebook } from "react-icons/fa";

const ContactForm = () => {
    const [form, setForm] = useState({ nom: "", email: "", message: "", file: null });
    const [sent, setSent] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, files } = e.target as any;
        if (name === "file") {
            setForm({ ...form, file: files[0] });
        } else {
            setForm({ ...form, [name]: value });
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Ici tu peux ajouter l'envoi vers une API ou un service email
        setSent(true);
    };

    return (
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center bg-[#7c6a58] pt-16">
            <div className="w-full max-w-3xl bg-[#7c6a58] p-8 mx-auto flex flex-col md:flex-row gap-12">
                {/* Formulaire */}
                <div className="flex-1">
                    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                        <label className="font-semibold text-lg text-white" htmlFor="nom">Nom</label>
                        <input
                            type="text"
                            name="nom"
                            id="nom"
                            placeholder="Votre nom"
                            value={form.nom}
                            onChange={handleChange}
                            required
                            className="p-3 rounded border border-green-700 focus:outline-none focus:ring-2 focus:ring-green-700"
                        />
                        <label className="font-semibold text-lg text-white" htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Votre Mail"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="p-3 rounded border border-green-700 focus:outline-none focus:ring-2 focus:ring-green-700"
                        />
                        <label className="font-semibold text-lg text-white" htmlFor="message">Message</label>
                        <textarea
                            name="message"
                            id="message"
                            placeholder="Votre message"
                            value={form.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            className="p-3 rounded border border-green-700 focus:outline-none focus:ring-2 focus:ring-green-700"
                        />
                        <label className="font-semibold  text-white" htmlFor="file">Pièce jointe</label>
                        <input
                            type="file"
                            name="file"
                            id="file"
                            onChange={handleChange}
                            className="block text-white border cursor-pointer "
                        />
                        {/* reCAPTCHA factice */}
                        <div className="bg-white rounded p-2 flex items-center gap-2 mt-2">
                            <input type="checkbox" id="captcha" required />
                            <label htmlFor="captcha" className="text-gray-700">Je ne suis pas un robot</label>
                        </div>
                        <button
                            type="submit"
                            className="bg-green-700 text-white font-bold py-3 rounded hover:bg-green-800 transition mt-4"
                        >
                            Envoyer
                        </button>
                        {sent && (
                            <div className="text-green-700 text-center font-semibold mt-2">Merci pour votre message !</div>
                        )}
                    </form>
                </div>
                {/* Infos de contact */}
                <div className="flex-1 flex flex-col gap-4 justify-start">
                    <h3 className="text-2xl font-bold text-green-200 mb-2">Adresse de l'atelier</h3>
                    <p className="text-white">37 rue des moulins bleus 80830<br />L'Etoile</p>
                    <div className="flex items-center gap-2 text-green-900 mt-2">
                        <FaPhone /> <span className="text-white">06 15 71 95 33</span>
                    </div>
                    <div className="flex items-center gap-2 text-green-900">
                        <FaEnvelope /> <span className="text-white">autour-de-latelier-du-bois@outlook.com</span>
                    </div>
                    <div className="flex items-center gap-2 text-green-900">
                        <FaFacebook /> <a href="#" className="text-white hover:underline">Facebook</a>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ContactForm; 