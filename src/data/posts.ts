export interface Post {
	id: number;
	title: string;
	slug: string;
	date: string;
	excerpt: string;
	featuredImage: string;
	actoresSociales: { name: string }[];
	videoYoutube?: string;
}

export const posts: Post[] = [
	{
		id: 1,
		title: "El anuncio de nuevas politicas economicas genera expectativa en el mercado",
		slug: "nuevas-politicas-economicas",
		date: "2024-01-15",
		excerpt: "El gobierno ha presentado un paquete de medidas economicas que incluyen reformas fiscales y estimulos para pequenas empresas. Los analistas consideran que estas medidas podrian tener un impacto significativo en la economia nacional, especialmente en el sector de las pymes que ha sido historicamente marginado. Las nuevas politicas incluyen reducciones impositivas temporales, acceso a creditos con tasas preferenciales y programas de capacitacion para emprendedores.",
		featuredImage: "https://picsum.photos/seed/gov1/800/400",
		actoresSociales: [{ name: "Gobierno" }],
		videoYoutube: "dQw4w9WgXcQ"
	},
	{
		id: 2,
		title: "Lideres de oposicion convocan movilizacion nacional para el proximo mes",
		slug: "movilizacion-nacional-oposicion",
		date: "2024-01-14",
		excerpt: "Las fuerzas opositoras se han unido para organizar una manifestacion en demanda de mayor transparencia electoral. El evento, programado para mediados del proximo mes, busca presionar al gobierno para implementar reformas que garantizen procesos electorales mas limpios. Diversos partidos han confirmado su participacion y se espera una afluencia masiva de ciudadanos en las principales ciudades del pais.",
		featuredImage: "https://picsum.photos/seed/opp1/800/400",
		actoresSociales: [{ name: "Oposicion" }]
	},
	{
		id: 3,
		title: "ONGs presentan informe sobre derechos humanos en zonas rurales",
		slug: "informe-derechos-humanos-rurales",
		date: "2024-01-13",
		excerpt: "Organizaciones de la sociedad civil denuncian situaciones criticas en comunidades alejadas del pais. El informe documenta mas de 50 casos de violaciones a derechos fundamentales, incluyendo acceso limitado a servicios de salud, educacion deficiente y falta de representacion politica. Las ONGs exigen al gobierno implementar las recomendaciones del consejo de derechos humanos.",
		featuredImage: "https://picsum.photos/seed/civ1/800/400",
		actoresSociales: [{ name: "Sociedad Civil" }]
	},
	{
		id: 4,
		title: "Empresarios anuncian inversion de 500 millones en tecnologia",
		slug: "inversion-tecnologia-empresarios",
		date: "2024-01-12",
		excerpt: "El sector privado confirma una historic inversion en infraestructura digital y centros de innovacion. El proyecto contempla la creacion de parques tecnologicos en tres regiones del pais, con la capacidad de generar mas de 5,000 empleos directos. Esta iniciativa representa el mayor compromiso del sector privado con la transformacion digital del pais.",
		featuredImage: "https://picsum.photos/seed/bus1/800/400",
		actoresSociales: [{ name: "Empresarios" }]
	},
	{
		id: 5,
		title: "Ministerio de Educacion lanza programa de becas universitarias",
		slug: "becas-universitarias-gobierno",
		date: "2024-01-11",
		excerpt: "Nueva iniciativa estatal becara a 10,000 estudiantes de bajos recursos durante los proximos cuatro anios. El programa cubre matricula, materiales y apoyo economico mensual. Las inscripciones abren el proximo mes y se priorizara a estudiantes de zonas rurales y comunidades vulnerables.",
		featuredImage: "https://picsum.photos/seed/gov2/800/400",
		actoresSociales: [{ name: "Gobierno" }],
		videoYoutube: "jNQXAC9IVRw"
	},
	{
		id: 6,
		title: "Partidos de oposicion rechazan propuesta de reforma constitucional",
		slug: "rechazo-reforma-constitucional",
		date: "2024-01-10",
		excerpt: "La coalicion opositora considera que la propuesta debilitaria los mecanismos de control democratico. En un comunicado conjunto, los partidos argumentan que el proyecto carece de consenso social y podria concentrar excesivo poder en el ejecutivo. Han convocado a un dialogo nacional para discutir alternativas.",
		featuredImage: "https://picsum.photos/seed/opp2/800/400",
		actoresSociales: [{ name: "Oposicion" }]
	},
	{
		id: 7,
		title: "Voluntarios organizan jornada de reforestacion en zonas afectadas",
		slug: "jornada-reforestacion-voluntarios",
		date: "2024-01-09",
		excerpt: "Miles de ciudadanos participan en la siembra de arboles para recuperar areas devastadas por incendios. La iniciativa, liderada por organizaciones ambientalistas, ha logrado plantar mas de 50,000 arboles en las ultimas semanas. Los voluntarios continuan trabajando para alcanzar la meta de 100,000 arboles antes de que termine el verano.",
		featuredImage: "https://picsum.photos/seed/civ2/800/400",
		actoresSociales: [{ name: "Sociedad Civil" }]
	},
	{
		id: 8,
		title: "Camara de comercio busca acuerdos con paises vecinos",
		slug: "acuerdos-comerciales-vecinos",
		date: "2024-01-08",
		excerpt: "Representantes empresariales negocian tratados para facilitar las exportaciones regionales. Las conversaciones avanzan con tres paises limitrofes y se espera firmar acuerdos en los proximos meses. El objetivo es reducir barreras arancelarias y simplificar los procesos de importacion y exportacion.",
		featuredImage: "https://picsum.photos/seed/bus2/800/400",
		actoresSociales: [{ name: "Empresarios" }]
	},
	{
		id: 9,
		title: "Nuevo plan de infraestructura vial promete conectar regiones aisladas",
		slug: "plan-infraestructura-vial",
		date: "2024-01-07",
		excerpt: "El gobierno federal destina recursos para la construccion de carreteras en zonas marginadas. El plan incluye 1,500 kilometros de nuevas vias y la rehabilitacion de rutas existentes. Se estima que el proyecto beneficiara a mas de 2 millones de ciudadanos que actualmente carecen de acceso adecuado a mercados y servicios.",
		featuredImage: "https://picsum.photos/seed/gov3/800/400",
		actoresSociales: [{ name: "Gobierno" }],
		videoYoutube: "ScMzIvxBSi4"
	},
	{
		id: 10,
		title: "Dirigente opositor denuncia presiones del gobierno central",
		slug: "denuncia-presiones-gobierno",
		date: "2024-01-06",
		excerpt: "El lider de la opposition alega que esta enfrentando intimidaciones por su postura critica. En rueda de prensa, mostro evidencia de seguimientos a su familia y presiones sobre sus colaboradores. Organismos internacionales han pedido al gobierno garantizar la seguridad de lideres politicos de oposicion.",
		featuredImage: "https://picsum.photos/seed/opp3/800/400",
		actoresSociales: [{ name: "Oposicion" }]
	},
	{
		id: 11,
		title: "Colectivos ambientalistas exigen proteccion de areas naturales",
		slug: "proteccion-areas-naturales",
		date: "2024-01-05",
		excerpt: "Organizaciones civiles presionan para que se declare reserva natural un bosque amenazado. El area, hogar de especies endémicas en peligro de extincion, corre riesgo por proyectos de explotacion forestal. Los activistas han reunido mas de 100,000 firmas en apoyo a la iniciativa de proteccion.",
		featuredImage: "https://picsum.photos/seed/civ3/800/400",
		actoresSociales: [{ name: "Sociedad Civil" }]
	},
	{
		id: 12,
		title: "Sector privado respalda plan de desarrollo sostenible",
		slug: "desarrollo-sostenible-sector-privado",
		date: "2024-01-04",
		excerpt: "Asociaciones empresariales se comprometen a invertir en energias renovables y practicas sostenibles. El compromiso incluye la reduccion de emisiones de carbono en un 30% para 2030 y la implementacion de sistemas de gestion ambiental certificados en todas sus operaciones.",
		featuredImage: "https://picsum.photos/seed/bus3/800/400",
		actoresSociales: [{ name: "Empresarios" }]
	}
];
