import { Metadata } from "next";
import { owner } from "@/assets/assets";
import { Check, Mail } from "lucide-react";
import Link from "next/link";
import Admonition from "@/app/ui/components/Admonition";
import ObfuscateEmailAddress from "@/app/ui/components/ObfuscateEmailAddress";

export const metadata: Metadata = {
  title: "CGU & Politique de confidentialité de l'application",
};

export default function Page() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <header>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Conditions générales d&apos;utilisation & Politique de
              confidentialité de l&apos;application
            </h1>
            <p className="text-gray-500 mb-8">
              Applicable à l&apos;application mobile{" "}
              <span className="font-bold">{owner.name}</span> (iOS et
              Android)
            </p>
          </header>

          <main>
            <h2 className="text-2xl font-bold text-brand-700 mb-6 pb-2 border-b border-gray-200">
              Conditions générales d&apos;utilisation
            </h2>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                1. Présentation
              </h3>
              <div className="prose text-gray-600 mb-5 leading-relaxed">
                <p>
                  <span className="font-bold text-nowrap">{owner.name}</span>{" "}
                  est une application mobile qui aide ses
                  utilisateur&middot;ice&middot;s à découvrir et identifier des
                  produits véganes. L&apos;utilisation de l&apos;application
                  vaut acceptation des présentes conditions.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                2. Utilisation de l&apos;application
              </h3>
              <div className="prose text-gray-600 mb-5 leading-relaxed">
                <p>
                  L&apos;application est accessible gratuitement. La création
                  d&apos;un compte est facultative. Certaines fonctionnalités
                  (thèmes personnalisés, badge de soutien) sont réservées aux
                  abonné&middot;e&middot;s.
                </p>
                <Admonition variant="indigo">
                  <p className="text-sm">
                    Nous améliorons constamment la fiabilité de la base de
                    données et contactons les marques pour vérifier les
                    produits, mais les résultats des scans sont fournis à
                    titre d&apos;information uniquement. Les données peuvent
                    contenir des erreurs car traitées par des humains, et les
                    marques changent parfois leurs formules sans prévenir.
                  </p>
                </Admonition>
              </div>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                3. Abonnements auto-renouvelables
              </h3>
              <div className="prose text-gray-600 mb-5 leading-relaxed">
                <p>
                  <span className="font-bold text-nowrap">{owner.name}</span>{" "}
                  propose des abonnements optionnels en 3 paliers (Graine,
                  Fleur, Arbre), disponibles en formule mensuelle ou annuelle.
                  Tous les paliers donnent accès aux mêmes avantages.
                </p>
                <div className="bg-gray-50 rounded-lg p-6 my-2">
                  <ul className="space-y-4 text-gray-600 leading-relaxed">
                    <li className="flex gap-3">
                      <Check
                        className="size-6 text-blue-500 shrink-0"
                        strokeWidth={1}
                      />
                      <span>
                        <span className="font-semibold">Paiement&nbsp;:</span>{" "}
                        le montant est prélevé sur votre compte Apple (via
                        iTunes) ou Google Play à la confirmation de
                        l&apos;achat&nbsp;;
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <Check
                        className="size-6 text-blue-500 shrink-0"
                        strokeWidth={1}
                      />
                      <span>
                        <span className="font-semibold">
                          Renouvellement automatique&nbsp;:
                        </span>{" "}
                        l&apos;abonnement se renouvelle automatiquement à la
                        fin de chaque période&nbsp;;
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <Check
                        className="size-6 text-blue-500 shrink-0"
                        strokeWidth={1}
                      />
                      <span>
                        <span className="font-semibold">
                          Gestion et annulation&nbsp;:
                        </span>{" "}
                        vous pouvez gérer ou annuler votre abonnement à tout
                        moment depuis les réglages de votre compte Apple ou
                        Google Play&nbsp;;
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <Check
                        className="size-6 text-blue-500 shrink-0"
                        strokeWidth={1}
                      />
                      <span>
                        <span className="font-semibold">
                          Pas de remboursement&nbsp;:
                        </span>{" "}
                        aucune période en cours ne sera remboursée en cas
                        d&apos;annulation. L&apos;accès aux avantages reste
                        actif jusqu&apos;à la fin de la période déjà
                        payée&nbsp;;
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <Check
                        className="size-6 text-blue-500 shrink-0"
                        strokeWidth={1}
                      />
                      <span>
                        <span className="font-semibold">
                          Modification des prix&nbsp;:
                        </span>{" "}
                        en cas de modification tarifaire, vous en serez
                        informé&middot;e au préalable. Le nouveau tarif
                        s&apos;appliquera au prochain renouvellement.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                4. Droit de rétractation
              </h3>
              <div className="prose text-gray-600 mb-5 leading-relaxed">
                <p>
                  Conformément à l&apos;article L.221-28 13° du Code de la
                  consommation, le droit de rétractation ne s&apos;applique
                  pas aux contrats de fourniture d&apos;un contenu numérique
                  non fourni sur un support matériel dont l&apos;exécution a
                  commencé après accord préalable exprès du consommateur et
                  renoncement exprès à son droit de rétractation.
                </p>
                <Admonition variant="yellow">
                  <p className="text-sm">
                    En confirmant l&apos;achat d&apos;un abonnement sur
                    l&apos;App Store ou le Google Play Store, vous reconnaissez
                    que l&apos;accès aux avantages de l&apos;abonnement débute
                    immédiatement et vous renoncez expressément à votre droit
                    de rétractation de 14 jours. Vous conservez toutefois la
                    possibilité de demander l&apos;annulation ou un
                    remboursement directement auprès d&apos;Apple ou de
                    Google, selon leurs propres politiques.
                  </p>
                </Admonition>
              </div>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                5. Âge minimum et capacité à contracter
              </h3>
              <div className="prose text-gray-600 mb-5 leading-relaxed">
                <p>
                  L&apos;utilisation de l&apos;application et la souscription
                  à un abonnement supposent que vous disposiez de la capacité
                  juridique de contracter au sens du droit français. Les
                  personnes mineures doivent obtenir l&apos;autorisation
                  préalable de leur représentant légal avant de créer un
                  compte ou de souscrire un abonnement payant&nbsp;; ce dernier
                  demeure responsable des achats effectués depuis le compte de
                  la personne mineure dont il a la charge.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                6. Compte utilisateur
              </h3>
              <div className="prose text-gray-600 mb-5 leading-relaxed">
                <p>
                  Vous êtes responsable de la confidentialité de vos
                  identifiants de connexion. Tout usage de votre compte est
                  réputé effectué par vous.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                7. Contenu et propriété intellectuelle
              </h3>
              <div className="prose text-gray-600 mb-5 leading-relaxed">
                <p>
                  L&apos;ensemble du contenu de l&apos;application (textes,
                  images, logos, design) est la propriété de{" "}
                  <span className="font-bold text-nowrap">{owner.name}</span>{" "}
                  et est protégé par les lois relatives à la propriété
                  intellectuelle. Toute reproduction non autorisée est
                  interdite.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                8. Limitation de responsabilité
              </h3>
              <div className="prose text-gray-600 mb-5 leading-relaxed">
                <p>
                  <span className="font-bold text-nowrap">{owner.name}</span>{" "}
                  fournit des informations à titre indicatif. Nous nous
                  efforçons de maintenir des données exactes, mais nous ne
                  pouvons garantir l&apos;exhaustivité ni l&apos;exactitude de
                  toutes les informations. En cas de doute sur la composition
                  d&apos;un produit, référez-vous à l&apos;étiquette du
                  produit.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                9. Résiliation et suspension du compte
              </h3>
              <div className="prose text-gray-600 mb-5 leading-relaxed">
                <p>
                  <span className="font-bold text-nowrap">{owner.name}</span>{" "}
                  se réserve le droit de suspendre ou de supprimer, à tout
                  moment et sans préavis, l&apos;accès au compte d&apos;un·e
                  utilisateur&middot;ice en cas de non-respect des présentes
                  conditions ou d&apos;usage frauduleux ou abusif de
                  l&apos;application (signalements mensongers répétés,
                  tentative d&apos;accès non autorisé, atteinte à la sécurité
                  ou au bon fonctionnement du service). Dans ce cas, aucune
                  somme déjà versée ne sera remboursée par{" "}
                  {owner.name}, sans préjudice des droits dont vous pourriez
                  disposer au titre des politiques de remboursement propres à
                  Apple ou Google Play.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                10. Dispositions spécifiques à l&apos;App Store (Apple)
              </h3>
              <div className="prose text-gray-600 mb-5 leading-relaxed">
                <p>
                  Lorsque l&apos;application est téléchargée depuis
                  l&apos;App Store, les stipulations suivantes s&apos;ajoutent
                  aux présentes conditions&nbsp;:
                </p>
                <div className="bg-gray-50 rounded-lg p-6 my-2">
                  <ul className="space-y-4 text-gray-600 leading-relaxed">
                    <li className="flex gap-3">
                      <Check
                        className="size-6 text-blue-500 shrink-0"
                        strokeWidth={1}
                      />
                      <span>
                        Les présentes conditions constituent un accord conclu
                        exclusivement entre vous et {owner.name}, à
                        l&apos;exclusion d&apos;Apple Inc. (&laquo;
                        Apple &raquo;)&nbsp;; {owner.name}, et non Apple, est
                        seule responsable de l&apos;application et de son
                        contenu&nbsp;;
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <Check
                        className="size-6 text-blue-500 shrink-0"
                        strokeWidth={1}
                      />
                      <span>
                        Apple n&apos;a aucune obligation de fournir des
                        services de maintenance ou de support concernant
                        l&apos;application&nbsp;;
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <Check
                        className="size-6 text-blue-500 shrink-0"
                        strokeWidth={1}
                      />
                      <span>
                        En cas de non-conformité de l&apos;application à une
                        garantie applicable, vous pouvez en informer Apple,
                        qui vous remboursera le cas échéant le prix
                        d&apos;achat de l&apos;application&nbsp;; dans la
                        mesure permise par la loi, Apple n&apos;aura aucune
                        autre obligation de garantie concernant
                        l&apos;application&nbsp;;
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <Check
                        className="size-6 text-blue-500 shrink-0"
                        strokeWidth={1}
                      />
                      <span>
                        Apple n&apos;est pas responsable du traitement de vos
                        réclamations ou de celles d&apos;un tiers relatives à
                        l&apos;application ou à votre possession et/ou
                        utilisation de celle-ci, y compris les réclamations
                        relatives à la responsabilité du fait des produits, à
                        la conformité légale ou réglementaire, ou à la
                        protection des consommateurs ou de la vie privée&nbsp;;
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <Check
                        className="size-6 text-blue-500 shrink-0"
                        strokeWidth={1}
                      />
                      <span>
                        En cas de réclamation d&apos;un tiers selon laquelle
                        l&apos;application porterait atteinte à ses droits de
                        propriété intellectuelle, {owner.name} sera seule
                        responsable de l&apos;instruction, de la défense et du
                        règlement de cette réclamation&nbsp;;
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <Check
                        className="size-6 text-blue-500 shrink-0"
                        strokeWidth={1}
                      />
                      <span>
                        Vous devez respecter les conditions des accords de
                        tiers applicables lors de l&apos;utilisation de
                        l&apos;application (par exemple, votre contrat
                        d&apos;abonnement mobile)&nbsp;;
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <Check
                        className="size-6 text-blue-500 shrink-0"
                        strokeWidth={1}
                      />
                      <span>
                        Apple et ses filiales sont des tiers bénéficiaires des
                        présentes conditions et, dès votre acceptation, Apple
                        aura le droit de les faire valoir à votre encontre en
                        tant que tiers bénéficiaire.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                11. Droit applicable et juridiction compétente
              </h3>
              <div className="prose text-gray-600 mb-5 leading-relaxed">
                <p>
                  Les présentes conditions sont soumises au droit français. En
                  dehors des cas où la loi ne le permet pas, il est fait
                  attribution exclusive de juridiction aux tribunaux
                  compétents de Paris.
                </p>
                <p>
                  Conformément aux articles L.616-1 et suivants du Code de la
                  consommation, en cas de litige, vous pouvez recourir
                  gratuitement à un médiateur de la consommation en vue de la
                  résolution amiable du litige, avant toute action en justice.
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                12. Modification des conditions
              </h3>
              <div className="prose text-gray-600 mb-5 leading-relaxed">
                <p>
                  Nous pouvons modifier ces conditions à tout moment. Les
                  modifications seront publiées sur cette page avec la date de
                  mise à jour. L&apos;utilisation continue de
                  l&apos;application après modification vaut acceptation des
                  nouvelles conditions.
                </p>
              </div>
            </section>

            <h2 className="text-2xl font-bold text-brand-700 mb-6 pb-2 border-b border-gray-200">
              Politique de confidentialité
            </h2>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                1. Collecte d&apos;informations
              </h3>
              <div className="prose text-gray-600 mb-5 leading-relaxed">
                <p>
                  L&apos;utilisation d&apos;un compte est facultative. Vous
                  pouvez utiliser l&apos;application sans créer de compte.
                </p>
                <p>Lorsque vous créez un compte, nous collectons&nbsp;:</p>
                <div className="bg-gray-50 rounded-lg p-6 my-2">
                  <ul className="space-y-4 text-gray-600 leading-relaxed">
                    <li className="flex gap-3">
                      <Check
                        className="size-6 text-blue-500 shrink-0"
                        strokeWidth={1}
                      />
                      <span>
                        <span className="font-semibold">
                          Adresse e-mail&nbsp;:
                        </span>{" "}
                        pour l&apos;identification et la connexion&nbsp;;
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <Check
                        className="size-6 text-blue-500 shrink-0"
                        strokeWidth={1}
                      />
                      <span>
                        <span className="font-semibold">Pseudo&nbsp;:</span>{" "}
                        nom d&apos;affichage dans l&apos;application&nbsp;;
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <Check
                        className="size-6 text-blue-500 shrink-0"
                        strokeWidth={1}
                      />
                      <span>
                        <span className="font-semibold">
                          Nombre de produits envoyés&nbsp;:
                        </span>{" "}
                        statistique liée à votre activité&nbsp;;
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <Check
                        className="size-6 text-blue-500 shrink-0"
                        strokeWidth={1}
                      />
                      <span>
                        <span className="font-semibold">
                          Nombre de produits scannés&nbsp;:
                        </span>{" "}
                        statistique liée à votre activité&nbsp;;
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <Check
                        className="size-6 text-blue-500 shrink-0"
                        strokeWidth={1}
                      />
                      <span>
                        <span className="font-semibold">
                          Date depuis laquelle vous êtes vegan&nbsp;:
                        </span>{" "}
                        information déclarative facultative&nbsp;;
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <Check
                        className="size-6 text-blue-500 shrink-0"
                        strokeWidth={1}
                      />
                      <span>
                        <span className="font-semibold">
                          Données géographiques statiques&nbsp;:
                        </span>{" "}
                        transmission facultative&nbsp;;
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <Check
                        className="size-6 text-blue-500 shrink-0"
                        strokeWidth={1}
                      />
                      <span>
                        <span className="font-semibold">
                          Suivi B12 (facultatif)&nbsp;:
                        </span>{" "}
                        dates de prise et fréquence de supplémentation,
                        uniquement si vous utilisez le rappel B12 avec un
                        compte, pour afficher votre historique et vos
                        statistiques personnelles&nbsp;;
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <Check
                        className="size-6 text-blue-500 shrink-0"
                        strokeWidth={1}
                      />
                      <span>
                        <span className="font-semibold">
                          Signalements d&apos;erreur&nbsp;:
                        </span>{" "}
                        commentaire et contact facultatif, ainsi que la
                        réponse de notre équipe.
                      </span>
                    </li>
                  </ul>
                </div>
                <p>
                  En cas d&apos;abonnement, nous traitons également&nbsp;:
                </p>
                <div className="bg-gray-50 rounded-lg p-6 my-2">
                  <ul className="space-y-4 text-gray-600 leading-relaxed">
                    <li className="flex gap-3">
                      <Check
                        className="size-6 text-blue-500 shrink-0"
                        strokeWidth={1}
                      />
                      <span>
                        <span className="font-semibold">
                          Identifiant de transaction&nbsp;:
                        </span>{" "}
                        fourni par Apple ou Google&nbsp;;
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <Check
                        className="size-6 text-blue-500 shrink-0"
                        strokeWidth={1}
                      />
                      <span>
                        <span className="font-semibold">
                          Type d&apos;abonnement et date d&apos;expiration
                          &nbsp;:
                        </span>{" "}
                        pour gérer votre accès.
                      </span>
                    </li>
                  </ul>
                </div>
                <Admonition variant="teal">
                  <p className="text-sm">
                    Nous n&apos;avons jamais accès à vos informations
                    bancaires. Les paiements sont intégralement gérés par
                    Apple (App Store) ou Google (Google Play). Aucune autre
                    donnée personnelle ou sensible (nom, adresse, numéro de
                    téléphone) n&apos;est collectée.
                  </p>
                </Admonition>
              </div>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                2. Utilisation des informations
              </h3>
              <div className="prose text-gray-600 mb-5 leading-relaxed">
                <p>Les informations collectées sont utilisées uniquement pour&nbsp;:</p>
                <div className="bg-gray-50 rounded-lg p-6 my-2">
                  <ul className="space-y-4 text-gray-600 leading-relaxed">
                    <li className="flex gap-3">
                      <Check
                        className="size-6 text-blue-500 shrink-0"
                        strokeWidth={1}
                      />
                      <span>
                        permettre la création et la gestion de votre compte
                        utilisateur&middot;ice&nbsp;;
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <Check
                        className="size-6 text-blue-500 shrink-0"
                        strokeWidth={1}
                      />
                      <span>gérer votre abonnement et vos accès&nbsp;;</span>
                    </li>
                    <li className="flex gap-3">
                      <Check
                        className="size-6 text-blue-500 shrink-0"
                        strokeWidth={1}
                      />
                      <span>afficher vos statistiques personnelles&nbsp;;</span>
                    </li>
                    <li className="flex gap-3">
                      <Check
                        className="size-6 text-blue-500 shrink-0"
                        strokeWidth={1}
                      />
                      <span>
                        améliorer l&apos;expérience
                        utilisateur&middot;ice.
                      </span>
                    </li>
                  </ul>
                </div>
                <p>
                  Nous ne vendons, ne louons et ne partageons aucune donnée
                  personnelle identifiable avec des tiers.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                3. Partenariats et données anonymisées
              </h3>
              <div className="prose text-gray-600 mb-5 leading-relaxed">
                <p>
                  <span className="font-bold text-nowrap">{owner.name}</span>{" "}
                  pourrait collaborer avec des marques partenaires afin de
                  mettre en avant certains produits et analyser leur
                  visibilité. Ces partenariats reposent exclusivement sur des
                  données anonymisées et des statistiques globales, sans
                  possibilité d&apos;identifier un&middot;e utilisateur&middot;ice
                  individuel&middot;le.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                4. Vos droits
              </h3>
              <div className="prose text-gray-600 mb-5 leading-relaxed">
                <p>
                  Conformément au RGPD, vous disposez des droits suivants sur
                  vos données personnelles&nbsp;:
                </p>
                <div className="bg-gray-50 rounded-lg p-6 my-2">
                  <ul className="space-y-4 text-gray-600 leading-relaxed">
                    <li className="flex gap-3">
                      <Check
                        className="size-6 text-blue-500 shrink-0"
                        strokeWidth={1}
                      />
                      <span>
                        <span className="font-semibold">Accès&nbsp;:</span>{" "}
                        obtenir une copie de vos données&nbsp;;
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <Check
                        className="size-6 text-blue-500 shrink-0"
                        strokeWidth={1}
                      />
                      <span>
                        <span className="font-semibold">
                          Rectification&nbsp;:
                        </span>{" "}
                        corriger des informations inexactes&nbsp;;
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <Check
                        className="size-6 text-blue-500 shrink-0"
                        strokeWidth={1}
                      />
                      <span>
                        <span className="font-semibold">
                          Suppression&nbsp;:
                        </span>{" "}
                        supprimer votre compte et toutes vos données&nbsp;;
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <Check
                        className="size-6 text-blue-500 shrink-0"
                        strokeWidth={1}
                      />
                      <span>
                        <span className="font-semibold">
                          Portabilité&nbsp;:
                        </span>{" "}
                        recevoir vos données dans un format structuré.
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg my-2 p-6 flex flex-col sm:flex-row items-center sm:justify-between">
                  <p className="text-gray-600">
                    Vous pouvez exercer ces droits directement dans
                    l&apos;application ou en nous contactant à&nbsp;:
                  </p>
                  <span className="inline-flex items-center text-blue-600 hover:text-blue-500">
                    <Mail className="size-5 mr-1" strokeWidth={1} />
                    <ObfuscateEmailAddress className="whitespace-nowrap" />
                  </span>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                5. Conservation des données
              </h3>
              <div className="prose text-gray-600 mb-5 leading-relaxed">
                <p>
                  Les données sont conservées tant que votre compte reste
                  actif. En cas de suppression de compte, toutes les données
                  associées sont supprimées.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                6. Cookies et technologies similaires
              </h3>
              <div className="prose text-gray-600 mb-5 leading-relaxed">
                <p>
                  L&apos;application{" "}
                  <span className="font-bold text-nowrap">{owner.name}</span>{" "}
                  n&apos;utilise pas de cookies ni d&apos;outils de suivi
                  externes.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                7. Sécurité
              </h3>
              <div className="prose text-gray-600 mb-5 leading-relaxed">
                <p>
                  Nous mettons en œuvre des mesures de sécurité raisonnables
                  pour protéger vos informations. Cependant, aucune méthode de
                  transmission ou de stockage électronique n&apos;est
                  totalement sécurisée.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                8. Modifications
              </h3>
              <div className="prose text-gray-600 mb-5 leading-relaxed">
                <p>
                  Nous pouvons mettre à jour cette politique à tout moment.
                  Toute modification sera publiée sur cette page avec la date
                  de mise à jour.
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                9. Contact
              </h3>
              <div className="bg-gray-50 rounded-lg p-6 flex flex-col sm:flex-row items-center sm:justify-between leading-relaxed">
                <p className="text-gray-600">
                  Des questions sur les présentes CGU ou sur la politique de
                  confidentialité de l&apos;application&nbsp;?
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-blue-600 hover:text-blue-500 border-b border-current/60"
                >
                  <Mail className="size-5 mr-1" strokeWidth={1} />
                  Contactez {owner.name}
                </Link>
              </div>
            </section>
          </main>

          <footer className="prose text-gray-600 mt-8 mb-5 leading-relaxed">
            <p className="flex items-center gap-2">
              <span className="italic">
                Dernière mise à jour&nbsp;:
              </span>
              <span>14 septembre 2026</span>
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
