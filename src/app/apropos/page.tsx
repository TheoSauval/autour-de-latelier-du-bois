import Header from "../../components/Header";


export default function APropos() {
    return (
        <div className="min-h-screen w-full bg-green-800 flex flex-col items-center ">
            <Header />
            <section className="w-full max-w-7xl mx-auto flex flex-col items-center bg-green-800 pt-16">
                <p className="text-center max-w-xl text-xl mb-8 leading-relaxed">
                    Passionné par le travail du bois, je vous propose les services d'usinage du bois suivants: sciage jusqu'à 24cm, rabotage / degauchissage jusqu'à 23cm,
                    tournage sur demande, vente de plateaux sur mesure ou de planches.
                </p>
            </section>
            <section className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 py-16">
                <img
                    src="/PHOTO_BOIS/About.jpg"
                    alt="Alexandre Boquet"
                    className="w-80 h-auto object-cover rounded shadow-lg"
                />
                <div className="flex-1 flex flex-col items-start">
                    <h2 className="text-3xl font-bold text-green-200 mb-2">Alexandre Boquet</h2>
                    <h3 className="text-xl font-semibold text-green-400 mb-4">Tourneur sur bois</h3>
                    <p className="text-lg text-white leading-relaxed">
                        Depuis sa création, l'atelier s'est considérablement développé. Initialement orienté vers le tournage sur bois, je me suis diversifié dans la fabrication de plateaux et le sciage de planches sur mesure.<br /><br />
                        Je m'oriente également vers la réparation de meubles ou de menuiseries (remplacement ou réparation de pièces cassées sur d'anciens meubles).
                    </p>
                </div>
            </section>
            <img
                src="/PHOTO_BOIS/buche2.jpg"
                alt="image d'un gros tronc d'arbre"
                className="w-full max-w-7xl h-64 object-cover mx-auto"
                style={{ display: 'block' }}
            />
            <section className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 bg-green-800 py-16">
                <img
                    src="/PHOTO_BOIS/atelier.jpg"
                    alt="image d'un gros tronc d'arbre"
                    className="w-96 h-auto object-cover rounded shadow-lg"
                />
                <div>
                    <h2 className="text-3xl font-bold text-green-200 mb-2">
                        Histoire de l'atelier
                    </h2>
                    <p className="flex-1 max-w-xl text-xl mb-8 leading-relaxed text-left md:mb-0">
                        Les débuts de l'atelier remontent à un cadeau d'anniversaire, en effet, j'ai reçu un tour à bois autour duquel s'est créé l'atelier (d'où le nom autour de l'atelier du bois) encouragé par les visiteurs, j'ai créé un atelier d'artisan très complet et polyvalent qui s'enrichie en compétences et en machines au fur et à mesure du temps.
                    </p>
                </div>
            </section>
            <section className="w-full max-w-7xl mx-auto flex items-center justify-center bg-green-800 py-2">
                <p className="text-center text-white">Copyright © 2023 Herent Aleksandre</p>
            </section>
        </div>
    );
}