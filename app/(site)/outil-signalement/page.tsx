import { Metadata } from "next";
import { Flag } from "lucide-react";
import AppStoresCta from "@/app/ui/components/AppStoresCta";
import JoinUsCta from "@/app/ui/components/JoinUsCta";
import StepByStepGuideSection from "@/app/ui/signalement/StepByStepGuideSection";
import SignalConsoBtns from "@/app/ui/signalement/SignalConsoBtns";
import SignalementChecklist from "@/app/ui/signalement/SignalementChecklist";
import TemplateMessageList from "@/app/ui/signalement/TemplateMessageList";

export const metadata: Metadata = {
  title: "Outil de signalement Signal Conso",
  description:
    "Signalez facilement des problèmes de consommation et aidez à améliorer la protection des consommateurs grâce à notre guide pas-à-pas.",
};

export default function Page() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 pt-16 space-y-24 lg:px-[12%]">
      <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 py-24 mx-auto xl:px-0 mt-5">
        <header>
          <div className="inline-flex items-center gap-2 text-sm font-medium text-orange-600 bg-orange-50 border border-orange-200 rounded-full px-3 py-1 w-fit mb-6">
            <Flag className="size-4" aria-hidden="true" />
            Outil militant
          </div>

          <h1 className="mb-1 text-5xl text-brand-600 font-extrabold leading-tight">
            Guide général Signal Conso
          </h1>
        </header>

        <main>
          <section>
            <h2 className="mb-12 text-lg font-merriweather">
              Signalez facilement des problèmes de consommation grâce à notre
              guide pas-à-pas
            </h2>

            <div className="lg:p-4 p-2 flex flex-col gap-6 flex-2 mb-12">
              <p className="md:text-justify lg:pt-12 leading-relaxed">
                Un produit affiché comme &laquo;&nbsp;vegan&nbsp;&raquo; qui
                contient des ingrédients d&apos;origine animale&nbsp;? Une
                mention trompeuse sur l&apos;emballage&nbsp;?{" "}
                <strong>
                  Signal Conso est le service officiel de la répression des
                  fraudes (DGCCRF) pour signaler ce type de problèmes
                </strong>
                .
              </p>
              <p className="text-justify leading-relaxed">
                Néanmoins, cette démarche peut sembler difficile ou intimidante,
                c&apos;est pourquoi{" "}
                <strong>
                  321&nbsp;Vegan met à votre disposition tous les éléments
                  nécessaires pour informer la répression des fraudes d&apos;un
                  problème sur un produit
                </strong>
                . Modèles de texte prêts à copier, captures d&apos;écran du
                processus, liste des éléments à préparer,{" "}
                <strong>
                  notre guide contient tous les éléments nécessaires à la bonne
                  réalisation de la démarche
                </strong>
                .
              </p>
              <p className="text-justify leading-relaxed">
                <strong>
                  Signalez facilement des problèmes de consommation et aidez à
                  améliorer la protection des consommateurs
                </strong>{" "}
                en informant la répression des fraudes{" "}
                <strong>grâce à notre guide pas-à-pas</strong>.
              </p>
            </div>
          </section>

          <section>
            <div className="text-center rounded-xl p-8 shadow-sm bg-brand-50">
              <h2 className="text-2xl font-bold mb-3 text-brand-600">
                Notre guide pas-à-pas vous accompagne à chaque étape de la
                démarche
              </h2>
              <p className="mb-6 text-brand-900">
                Consultez notre guide pas-à-pas puis rendez-vous sur le site web
                Signal Conso pour déposer votre signalement.
              </p>

              <SignalConsoBtns />
            </div>
          </section>

          <section id="checklist" className="scroll-mt-20">
            <h2 className="mt-16 mb-12 text-lg font-merriweather">
              Liste des éléments requis&nbsp;:
            </h2>
            <p className="md:text-justify text-balance mb-16 leading-relaxed">
              Assurez-vous de réunir les éléments listés ci-après pour effectuer
              un signalement auprès de la répression des fraudes (DGCCRF).
            </p>

            <SignalementChecklist />
          </section>

          <section id="messageTemplate" className="scroll-mt-20">
            <h2 className="mt-16 mb-12 text-lg font-merriweather">
              Modèles de message à copier&nbsp;:
            </h2>
            <p className="md:text-justify text-balance mb-16 leading-relaxed">
              Personnalisez nos modèles de message prêts à copier si besoin,
              puis utilisez-les directement dans le formulaire Signal Conso.
            </p>

            <TemplateMessageList />
          </section>

          <section>
            <AppStoresCta
              bgColor="bg-brand-50"
              titleColor="text-brand-600"
              textColor="text-brand-900"
              wrapperClass="mt-16"
            />
          </section>

          <StepByStepGuideSection />

          <section>
            <p className="my-16 text-xs leading-relaxed text-gray-600 italic text-center">
              Cet outil militant, pensé et offert par 321 Vegan, permet de mieux
              comprendre la procédure à suivre pour signaler des problèmes de
              consommation sur le site officiel de la répression des fraudes
              (DGCCRF){" "}
              <a
                href="https://signal.conso.gouv.fr/fr/achat-magasin/faire-un-signalement"
                target="_blank"
                rel="noopener noreferrer"
                className="pb-1 inline-flex items-center gap-2 border-b-2 border-brand-700 cursor-pointer hover:shadow-[0_1rem_2rem] hover:bg-brand-700 hover:text-white hover:-translate-y-1 focus:bg-brand-700 focus:text-brand-700 active:bg-brand-700 active:text-white transition duration-300 relative z-0 hover:after:bg-brand-700 after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full  hover:after:scale-x-105 hover:after:scale-y-125"
              >
                www.signal.conso.gouv.fr
              </a>
              .
            </p>
          </section>

          <section>
            <JoinUsCta
              bgColor="bg-brand-50"
              titleColor="text-brand-600"
              textColor="text-brand-900"
              wrapperClass="mt-16"
            />
          </section>
        </main>
      </div>
    </div>
  );
}
