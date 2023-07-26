import img_valence from "../img/thumbnails/Valence.jpg";
import img_dijon from "../img/thumbnails/Dijon.jpg";
import img_rennes from "../img/thumbnails/Rennes.jpg";
import img_orleans from "../img/thumbnails/Orléans.jpg";
import img_nancy from "../img/thumbnails/Nancy.jpg";
import img_amiens from "../img/thumbnails/Amiens.jpg";
import img_paris from "../img/thumbnails/Paris.jpg";
import img_deauville from "../img/thumbnails/Deauville.jpg";
import img_biarritz from "../img/thumbnails/Biarritz.jpg";
import img_toulouse from "../img/thumbnails/Toulouse.jpg";
import img_nantes from "../img/thumbnails/Nantes.jpg";
import img_aixenprovence from "../img/thumbnails/AixEnProvence.jpg";

const license4 = {
  name: "CC BY-SA 4.0",
  url: "https://creativecommons.org/licenses/by-sa/4.0/",
};

const license3 = {
  name: "CC BY-SA 3.0",
  url: "https://creativecommons.org/licenses/by-sa/3.0/",
};

const DUMMY_OFFICES = [
  {
    id: "1",
    name: "Théo LEBEN - Valence",
    description:
      "Valence offre une belle combinaison de charme historique et de modernité. Son centre-ville pittoresque est imprégné d'histoire, avec une cathédrale majestueuse et des ruelles pavées charmantes. La région est réputée pour ses vignobles et sa gastronomie, faisant le bonheur des amateurs de cuisine et de vins. La proximité du fleuve Rhône et des montagnes du Vercors offre de nombreuses possibilités d'activités de plein air. Vivre à Valence permet de profiter d'une qualité de vie agréable, d'une ambiance conviviale et d'une accessibilité aisée à des paysages variés et de multiples découvertes culturelles.",
    phone: "+33(0)1 23 45 67 89",
    address: "10 rue de la chance",
    location: "Valence",
    region: "Auvergne-Rhône-Alpes",
    thumbnail: {
      photo: img_valence,
      author: "Chabe01",
      license: license4,
      description: "Cathédrale Saint-Apollinaire de Valence",
    },
  },
  {
    id: "2",
    name: "Théo LEBEN - Dijon",
    description:
      "Dijon, en France, séduit par son riche patrimoine historique et culturel. Son centre-ville médiéval est magnifiquement préservé, offrant une architecture impressionnante et des ruelles pittoresques. Célèbre pour sa moutarde et sa cuisine bourguignonne, Dijon ravit les gourmets avec ses délices culinaires et ses marchés animés. La ville propose également de nombreux événements culturels et festivals, créant une vie sociale dynamique.En tant que capitale de la région Bourgogne-Franche-Comté, Dijon offre des opportunités professionnelles dans divers secteurs, notamment l'industrie, la recherche et l'enseignement supérieur. Sa taille moyenne permet de profiter d'un rythme de vie agréable, avec des parcs et espaces verts pour se détendre. Enfin, la ville est bien desservie par les transports en commun, facilitant les déplacements locaux et les voyages vers d'autres régions de France et de l'Europe. Vivre à Dijon signifie s'immerger dans l'histoire, la gastronomie et le dynamisme d'une ville à taille humaine, tout en bénéficiant d'un cadre de vie plaisant.",
    phone: "+33(0)1 23 45 67 89",
    address: "10 rue de la chance",
    location: "Dijon",
    region: "Bourgogne-Franche-Comté",
    thumbnail: {
      photo: img_dijon,
      author: "Benh LIEU SONG",
      license: license3,
      description: "Église Notre-Dame de Dijon",
    },
  },
  {
    id: "3",
    name: "Théo LEBEN - Bretagne",
    description:
      "Rennes, en France, séduit par son atmosphère jeune et dynamique en tant que ville universitaire. Son centre historique préservé, avec ses maisons à pans de bois et ses rues pavées, ajoute un charme indéniable à la ville. Riche en événements culturels et festivals, Rennes offre une vie culturelle animée et diversifiée. La scène gastronomique florissante met en avant les produits locaux de Bretagne, offrant une cuisine délicieuse et variée. En tant que capitale de la région Bretagne, Rennes est un centre économique important avec des opportunités professionnelles dans les secteurs du numérique, de la recherche et des industries créatives. Dotée d'un excellent réseau de transports en commun, la ville facilite les déplacements et est bien reliée à d'autres villes françaises. Habiter à Rennes permet de profiter d'une qualité de vie élevée, d'un environnement vert agréable et d'une ambiance conviviale, attirant les résidents de tous horizons.",
    phone: "+33(0)1 23 45 67 89",
    address: "10 rue de la chance",
    location: "Rennes",
    region: "Bretagne",
    thumbnail: {
      photo: img_rennes,
      author: "Erwan Corre",
      license: license4,
      description: "Statue de Leperdit sur la Place du Champ Jacquet à Rennes",
    },
  },
  {
    id: "4",
    name: "Théo LEBEN - Orléans",
    description:
      "Orléans offre une attractivité unique grâce à son riche héritage historique, notamment lié à Jeanne d'Arc. La ville possède un centre médiéval charmant avec des rues pavées et des maisons à colombages. Son emplacement privilégié le long de la Loire en fait un cadre pittoresque pour les activités de plein air L'ambiance conviviale et la vie culturelle animée, avec des festivals et des événements tout au long de l'année, créent une atmosphère dynamique. Orléans est également un centre économique en plein essor, offrant des opportunités professionnelles dans des secteurs variés. La proximité de Paris, ainsi que les excellentes liaisons de transport, en font un point de départ idéal pour explorer la région Centre-Val de Loire et d'autres parties de la France. Habiter à Orléans permet de profiter d'un mélange équilibré de tradition, de modernité et de qualité de vie, attirant les résidents en quête de diversité et d'authenticité.",
    phone: "+33(0)1 23 45 67 89",
    address: "10 rue de la chance",
    location: "Orléans",
    region: "Centre-Val de Loire",
    thumbnail: {
      photo: img_orleans,
      author: "Wouter Hagens",
      license: license3,
      description: "Statue de Jeanne d'Arc sur la Place du Martroi à Orléans",
    },
  },
  {
    id: "5",
    name: "Théo LEBEN - Nancy",
    description:
      "Nancy est une ville attrayante qui séduit par son élégance et son patrimoine architectural remarquable, représenté notamment par la célèbre Place Stanislas. Son centre historique offre une atmosphère pittoresque avec ses rues pavées et ses bâtiments de style Art Nouveau. Nancy abrite une vie culturelle dynamique avec de nombreux musées, théâtres et festivals tout au long de l'année. En tant que ville étudiante, Nancy offre un environnement jeune et animé, avec plusieurs établissements d'enseignement supérieur réputés. Elle est également un pôle économique majeur dans la région Grand Est, offrant des opportunités professionnelles diversifiées. La ville bénéficie d'un excellent réseau de transports en commun, ce qui facilite les déplacements locaux. Vivre à Nancy signifie profiter d'un cadre de vie agréable, avec une cuisine riche en spécialités lorraines, ainsi que la proximité de la nature avec les parcs et les espaces verts environnants.",
    phone: "+33(0)1 23 45 67 89",
    address: "10 rue de la chance",
    location: "Nancy",
    region: "Grand Est",
    thumbnail: {
      photo: img_nancy,
      author: "Nicolas Cornet",
      license: license4,
      description: "Place Stanislas et ses grilles à Nancy",
    },
  },
  {
    id: "6",
    name: "Théo LEBEN - Amiens",
    description:
      "Amiens charme les visiteurs par sa cathédrale gothique classée au patrimoine mondial de l'UNESCO et ses canaux pittoresques. La ville offre un mélange équilibré entre histoire et modernité avec son centre médiéval bien préservé et ses infrastructures contemporaines. Amiens propose une vie culturelle riche, avec des festivals, des événements artistiques et une scène musicale animée. En tant que ville étudiante, Amiens est dynamique et animée, avec plusieurs universités et écoles supérieures. Elle offre également un coût de la vie plus abordable que dans certaines grandes villes françaises. Sa position géographique avantageuse facilite les déplacements vers Paris, Lille et d'autres destinations en France et en Europe. Habiter à Amiens permet de profiter d'une ambiance chaleureuse, d'une cuisine délicieuse, et d'une atmosphère conviviale, attirant les résidents en quête de culture, d'éducation et de qualité de vie.",
    phone: "+33(0)1 23 45 67 89",
    address: "10 rue de la chance",
    location: "Amiens",
    region: "Hauts-de-France",
    thumbnail: {
      photo: img_amiens,
      author: "Raimond Spekking",
      license: license4,
      description: "Cathédrale Notre-Dame d'Amiens",
    },
  },
  {
    id: "7",
    name: "Théo LEBEN - Paris 2ème",
    description:
      "Paris attire des millions de visiteurs chaque année avec son charme intemporel et son patrimoine culturel unique. La ville est réputée pour ses monuments emblématiques tels que la Tour Eiffel, le Louvre et Notre-Dame. Paris offre une scène artistique et culturelle dynamique avec ses musées, théâtres et galeries d'art renommées. En tant que centre économique majeur, Paris propose une multitude d'opportunités professionnelles dans divers secteurs, notamment la mode, la finance et la technologie. Vivre à Paris permet de profiter d'une vie cosmopolite, avec une offre gastronomique exceptionnelle et une vie nocturne animée. La ville offre également de magnifiques parcs et jardins, ainsi qu'un système de transport en commun bien développé, facilitant les déplacements dans la métropole. Habiter à Paris signifie s'immerger dans une atmosphère riche en histoire, en culture et en opportunités, attirant les résidents du monde entier en quête d'expériences inoubliables.",
    phone: "+33(0)1 23 45 67 89",
    address: "10 rue de la chance",
    location: "Paris 2ème",
    region: "Île-de-France",
    thumbnail: {
      photo: img_paris,
      author: "Alexander Hoernigk",
      license: license4,
      description: "Façade du palais Garnier à Paris",
    },
  },
  {
    id: "8",
    name: "Théo LEBEN - Deauville",
    description:
      "Deauville, en France, est une destination balnéaire de renommée internationale qui attire les visiteurs avec ses plages de sable fin, ses célèbres planches en bois et son charme élégant. La ville offre un cadre idyllique avec ses somptueuses villas, ses hôtels de luxe et son casino emblématique. Deauville propose une vie culturelle animée avec son festival du cinéma américain, ses événements équestres et ses galeries d'art. En tant que station balnéaire prisée, Deauville offre un cadre de vie paisible et agréable, propice aux activités de plein air et à la détente. Les résidents peuvent profiter d'une cuisine raffinée, de produits locaux de qualité et de marchés animés. De plus, la proximité de Paris et les excellentes connexions de transport en font une destination facilement accessible. Habiter à Deauville offre un mélange de prestige, de détente et de loisirs, attirant ceux en quête d'un mode de vie élégant et ressourçant au bord de la mer.",
    phone: "+33(0)1 23 45 67 89",
    address: "10 rue de la chance",
    location: "Deauville",
    region: "Normandie",
    thumbnail: {
      photo: img_deauville,
      author: "Arnaud 25",
      license: license3,
      description: "Casino de Deauville",
    },
  },
  {
    id: "9",
    name: "Théo LEBEN - Biarritz",
    description:
      "Biarritz, située sur la côte basque en France, séduit par son charme balnéaire et son ambiance élégante. Célèbre pour ses plages de sable fin, ses spots de surf renommés et ses vagues spectaculaires, Biarritz attire les amateurs d'activités nautiques et de détente. La ville est également réputée pour ses somptueux hôtels, ses boutiques de luxe et ses restaurants gastronomiques. Vivre à Biarritz offre un cadre de vie privilégié, entre océan et montagnes, avec un climat doux toute l'année. Les résidents peuvent profiter d'un mode de vie sain, avec de nombreuses possibilités de randonnées, de sports en plein air et d'événements culturels. Biarritz est également bien reliée à d'autres villes européennes grâce à son aéroport international. Habiter à Biarritz permet de s'imprégner de l'élégance balnéaire, de la beauté naturelle et de la qualité de vie, attirant ceux en quête de détente, d'aventures et de raffinement.",
    phone: "+33(0)1 23 45 67 89",
    address: "10 rue de la chance",
    location: "Biarritz",
    region: "Nouvelle-Aquitaine",
    thumbnail: {
      photo: img_biarritz,
      author: "Rundvald",
      license: license4,
      description:
        "La Roche Ronde, située à quelques mètres de la plage de Miramar à Biarritz",
    },
  },
  {
    id: "10",
    name: "Théo LEBEN - Toulouse",
    description:
      "Toulouse, surnommée la \"Ville rose\", est une destination attractive en France, alliant un riche patrimoine historique à une modernité florissante. La ville abrite d'imposants monuments tels que la basilique Saint-Sernin et le Capitole. Réputée pour son ambiance conviviale, Toulouse offre une vie culturelle dynamique avec ses festivals, théâtres et musées. En tant que pôle économique majeur, Toulouse est le siège d'entreprises aérospatiales et technologiques de renommée mondiale. Cela crée de nombreuses opportunités professionnelles et attire des talents internationaux. La région toulousaine bénéficie également d'un climat méditerranéen agréable et de la proximité des montagnes des Pyrénées. Habiter à Toulouse permet de profiter d'un équilibre entre tradition et modernité, d'une excellente cuisine du Sud-Ouest et de multiples activités culturelles et de loisirs, séduisant ainsi les résidents en quête d'une vie citadine dynamique et épanouissante.",
    phone: "+33(0)1 23 45 67 89",
    address: "10 rue de la chance",
    location: "Toulouse",
    region: "Occitanie",
    thumbnail: {
      photo: img_toulouse,
      author: "Didier Descouens",
      license: license4,
      description: "Musée des augustins à Toulouse",
    },
  },
  {
    id: "11",
    name: "Théo LEBEN - Nantes",
    description:
      "Nantes, en France, est une ville attractive qui combine un patrimoine historique riche avec une ambiance moderne et créative. Son centre historique offre des rues pittoresques et des monuments emblématiques tels que le Château des Ducs de Bretagne. Nantes se distingue par son dynamisme culturel, avec de nombreux événements artistiques et festivals. En tant que ville étudiante, Nantes propose une vie animée et jeune, avec plusieurs universités et écoles supérieures. Elle offre également de nombreuses opportunités professionnelles dans des secteurs diversifiés, tels que les industries créatives, la technologie et l'innovation. Située à proximité de la côte atlantique, Nantes offre un cadre de vie agréable, avec des espaces verts, des bords de la Loire et des activités de plein air. Vivre à Nantes permet de profiter d'une atmosphère conviviale, d'une cuisine délicieuse et de connexions de transport pratiques vers d'autres régions de France et d'Europe, attirant ainsi les résidents en quête de qualité de vie et de diversité culturelle.",
    phone: "+33(0)1 23 45 67 89",
    address: "10 rue de la chance",
    location: "Nantes",
    region: "Pays de la Loire",
    thumbnail: {
      photo: img_nantes,
      author: "Jibi44",
      license: license3,
      description: "Vue aérienne du château des ducs de Bretagne à Nantes",
    },
  },
  {
    id: "12",
    name: "Théo LEBEN - Provence",
    description:
      "La Provence, une région du sud de la France, est irrésistiblement attrayante avec ses paysages pittoresques, ses champs de lavande et ses vignobles. Son climat méditerranéen doux et ensoleillé ajoute à son charme. Cette région regorge de villages pittoresques, de marchés animés et de monuments historiques. Habiter en Provence offre une qualité de vie agréable, mêlant détente et richesse culturelle. La gastronomie provençale, avec ses produits locaux et ses vins renommés, est un délice pour les sens. Les loisirs en plein air abondent, des randonnées dans les montagnes aux baignades dans la mer. L'atmosphère conviviale et authentique de la Provence attire les résidents en quête d'un mode de vie harmonieux, en communion avec la nature et l'art de vivre à la française.",
    phone: "+33(0)1 23 45 67 89",
    address: "10 rue de la chance",
    location: "Aix-en-Provence",
    region: "Provence-Alpes-Côte d'Azur",
    thumbnail: {
      photo: img_aixenprovence,
      author: "Bjs",
      license: license4,
      description: "Cathédrale Saint-Sauveur d'Aix-en-Provence",
    },
  },
];

export default DUMMY_OFFICES;
