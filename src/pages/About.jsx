import AboutBg from "../assets/about.jpg"
export default function About() {
  return (
    <div id="about" className="h-screen scroll-pt-24 pt-24 flex justify-center">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-1">A PROPOS</h1>
          <div className=" bg-[var(--accent-100)] rounded-lg mx-auto w-8 h-1"></div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="col-span-1 relative">
            <img
              src={AboutBg}
              alt="About photo"
              className="w-full h-[500px] object-cover bg-center bg-cover rounded-lg"
            />
            <div className="absolute w-full top-0 bg-black/45 rounded-lg h-[500px]"></div>
          </div>
          <div className="col-span-1">
            <div className="text-justify line-clamp-[17]">
              <p className="mb-2">
                <b className="text-xl text-[var(--accent-100)]">
                  À Propos de Nous
                </b>{" "}
                <br /> Bienvenue chez Consultant Financier Expert !
              </p>
              <p className="mb-2">
                <b className="text-xl text-[var(--accent-100)]">
                  Notre Histoire{" "}
                </b>
                <br />
                Notre aventure a commencé il y a plus de dix ans, lorsque notre
                fondateur, Jean Dupont, a décidé de mettre son expertise
                financière au service des particuliers et des entreprises.
                Passionné par les chiffres et les opportunités d’investissement,
                il a créé Consultant Financier Expert avec une vision claire :
                aider nos clients à atteindre leurs objectifs financiers.
              </p>
              <p className="mb-2">
                <b className="text-xl text-[var(--accent-100)]">
                  Notre Mission
                </b>{" "}
                <br /> Chez Consultant Financier Expert, nous croyons que chaque
                personne mérite une gestion financière avisée et personnalisée.
                Notre mission est de fournir des conseils financiers de qualité,
                des stratégies d’investissement intelligentes et une
                planification fiscale efficace. Nous sommes là pour vous
                accompagner à chaque étape de votre parcours financier.
              </p>
              <p className="mb-2">
                <b className="text-xl text-[var(--accent-100)]">Nos Valeurs</b>{" "}
                <br /> Intégrité : Nous agissons toujours dans l’intérêt de nos
                clients, en toute transparence. Excellence : Nous visons
                l’excellence dans nos services et recherchons constamment des
                moyens d’améliorer vos résultats financiers. Engagement : Votre
                succès est notre priorité. Nous sommes engagés à vous offrir des
                solutions sur mesure. Confidentialité : Vos informations sont en
                sécurité avec nous. Nous respectons la confidentialité de nos
                clients.
              </p>
              <p className="mb-2">
                <b className="text-xl text-[var(--accent-100)]">Notre Équipe</b>{" "}
                <br /> Derrière Consultant Financier Expert, il y a une équipe
                passionnée et compétente. Nos conseillers financiers, analystes
                et experts en investissement travaillent ensemble pour vous
                offrir les meilleures solutions. Découvrez notre équipe sur
                notre page dédiée.
              </p>
            </div>
            <div className="flex justify-center items-center my-4">
              <button className="bg-[var(--accent-100)] text-white py-2 px-4 rounded">
                Voir Plus
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
