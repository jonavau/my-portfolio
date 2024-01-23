export const projects = [
	{
		id: '1',
		title: "Sophie Bluel - architecte d'intérieur",
		skills: ['JavaScript', 'DOM', 'API'],
		link: 'https://github.com/jonavau/Projet6OC',
		description:
			"Dans ce projet, j'ai pu mettre en pratique  la manipulation des éléments du DOM avec JavaScript, récupérer les données utilisateurs dans le JavaScript via des formulaires et gérer les événements utilisateurs avec JavaScript.",
		bigDescription:
			"Dans ce projet, j'ai pu mettre en pratique  la manipulation des éléments du DOM avec JavaScript pour générer une galerie d'image à partir d'une base de donnée . J'ai récupéré les données utilisateurs dans le JavaScript via des formulaires pour gérer l'authentification et la connexion d'utilisateurs. J'ai également mis en place une gestion des événements avec JavaScript pour avoir un tri sur les éléments de la galerie. Enfin j'ai réalisé une fenêtre modale qui permet d'ajouter et de supprimer des éléments de la galerie.",
		pictures: [
			'https://raw.githubusercontent.com/jonavau/my-portfolio/master/src/assets/project_img/sophie2.PNG',
			'https://raw.githubusercontent.com/jonavau/my-portfolio/master/src/assets/project_img/sophie3.PNG',
			'https://raw.githubusercontent.com/jonavau/my-portfolio/master/src/assets/project_img/sophie1.PNG',
		],
	},
	{
		id: '2',
		title: 'Nina Carducci - photographe',
		skills: ['SEO', 'Performance', 'Accessibilité'],
		link: 'https://jonavau.github.io/Projet9OC/',
		description:
			"A l'aide d'outils tel que LightHouse et Wave, j'ai réalisé l'audit d'un site et optimiser ses performances, son accessibilité et son SEO",
		bigDescription:
			"A l'aide des outils LightHouse et Wave, j'ai réalisé l'audit d'un site. J'ai ensuite optimisé ses performances en suivant les recommandations de lightHouse et en suivants les bonnes pratique de référencement et de Green Code. J'ai ensuite retravaillé son accessibilité grâce à  Wave et aisni modifier la structure, le contraste, etc. tout ses éléments squi permettent de faciliter la navigation à des personnes ayant des déficiences visuelles ou auditives par exemple, mais également de bonne pratique même pour une personne n'ayant pas de handicap. L'ensemble de ses modifications a également contribué au meilleur référencement du site. Enfin, j'ai également ajouté des Meta donnée pour la géolocalisation de l'entreprise et ses informations, ainsi que pour des posts enrichis sur les réseaux sociaux tels que Facebook ou Twitter.",
		pictures: [
			'https://raw.githubusercontent.com/jonavau/my-portfolio/master/src/assets/project_img/Nina1.png',
			'https://raw.githubusercontent.com/jonavau/my-portfolio/master/src/assets/project_img/Nina2.png',
			'https://raw.githubusercontent.com/jonavau/my-portfolio/master/src/assets/project_img/Nina3.png',
		],
		moreDesc: [
			'https://raw.githubusercontent.com/jonavau/my-portfolio/master/src/assets/project_img/Nina1.png',
			'https://raw.githubusercontent.com/jonavau/my-portfolio/master/src/assets/project_img/Nina2.png',
			'https://raw.githubusercontent.com/jonavau/my-portfolio/master/src/assets/project_img/Nina3.png',
		],
	},
	{
		id: '3',
		title: '724events',
		skills: ['Outils Dev', 'librairie de test', 'React', 'debuggage'],
		link: 'https://github.com/jonavau/p10-debuggage',
		description:
			"J'ai ici débogué un site déjà réalisé grâce aux DevTools et les logs, puis j'ai rédigé un cahier de recette et valider une librairie de test.",
		bigDescription:
			"J'ai ici débogué un site déjà qui était déjà réalisé . J'ai procédé étapes par étapes grâce aux DevTools et aux logs pour corriger cette application React qui présentait des problèmes sur son carrousel, sa galerie d'images et ses dates notamment. J'ai également rédigé un cahier de recette avec les scénarios utilisateurs et enfin validez une librairie de test pour m'assurer du bon fonctionnement du site avant son déploiement.",
		pictures: [
			'https://raw.githubusercontent.com/jonavau/my-portfolio/master/src/assets/project_img/debug2.PNG',
			'https://raw.githubusercontent.com/jonavau/my-portfolio/master/src/assets/project_img/debug3.PNG',
			'https://raw.githubusercontent.com/jonavau/my-portfolio/master/src/assets/project_img/debug1.PNG',
		],
	},
	{
		id: '4',
		title: 'ArgentBank ',
		skills: ['React', 'Redux', 'API REST', 'Github'],
		link: 'https://github.com/jonavau/ArgentBank-website-JV',
		description:
			"J'ai ici affiché les données du back end sur l'interface via des appels API , implémenté la gestion des données avec Redux et Redux-persist pour assurer le fonctionnement du front et configuré des routes API pour la communication client / serveur.",
		bigDescription:
			"Dans ce récent projet, j'ai réalisé l'authentification, la déconnexion et la gestion de l'utilisateur et de son profil dans une App React et avec le state Manager Redux et son store; l'interface utilisateur et le découpage en composant réutilisable a été réalisé depuis un design en HTML et CSS simple. Grâce au store redux j'ai pu dispatcher les différents state aux composants directement. J'ai également utilisé le package Redux-persist pour réhydrater le store via le localStorage afin de conserver la connexion utilisateur.",
		pictures: [
			'https://raw.githubusercontent.com/jonavau/my-portfolio/master/src/assets/project_img/argent1.PNG',
			'https://raw.githubusercontent.com/jonavau/my-portfolio/master/src/assets/project_img/Argent2.PNG',
			'https://raw.githubusercontent.com/jonavau/my-portfolio/master/src/assets/project_img/Argent3.PNG',
		],
	},
];
