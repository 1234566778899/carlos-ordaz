export const TIKTOK_PROFILE = 'https://www.tiktok.com/@gisi.online'
export const BRAND = 'Carlos | Creo Apps'

export type Status = 'store' | 'review'

export type Project = {
  slug: string
  name: string
  day: number
  tagline: string
  description: string
  features: [string, string, string][] // [emoji, título, detalle]
  status: Status
  appStore?: string
  website?: string
  tiktok: string
  keyword?: string // palabra para comentar en el video
}

export const projects: Project[] = [
  {
    slug: 'agendin',
    name: 'Agendin',
    day: 1,
    tagline: 'Reservas y agenda para negocios que viven de citas.',
    description:
      'Tus clientes reservan desde un enlace, sin descargar nada ni crear cuenta, y tú manejas la agenda de todo tu equipo desde el iPhone. Para barberías, salones, spas, consultorios y canchas.',
    features: [
      ['📅', 'Tu agenda en el iPhone', 'Día, semana y mes con columnas por profesional.'],
      ['🔗', 'Tu página de reservas', 'Un enlace para WhatsApp e Instagram.'],
      ['🛡️', 'Cero dobles reservas', 'Cada horario se valida al confirmar.'],
      ['🔔', 'Avisos al instante', 'Cuando reservan, cancelan o cambian una cita.'],
      ['📲', 'Pagos por Yape', 'Pide depósitos y verifícalos desde la app.'],
      ['👥', 'Tu equipo con permisos', 'Cada empleado ve solo lo suyo.'],
    ],
    status: 'store',
    appStore: 'https://apps.apple.com/app/id6823010375',
    website: 'https://agendi-six.vercel.app',
    tiktok: 'https://www.tiktok.com/@gisi.online/video/7697124456539409671',
    keyword: 'AGENDA',
  },
  {
    slug: 'gisi',
    name: 'Gisi',
    day: 2,
    tagline: 'Planes cerca de ti y un radar para conocer gente.',
    description:
      'Para cuando quieres salir y nadie puede: abre el mapa, mira los planes que hay cerca y únete. Y con el radar descubres a personas que están a unos metros.',
    features: [
      ['🗺️', 'Planes en el mapa', 'Mira qué hay cerca y únete en un toque.'],
      ['➕', 'Crea tu plan', 'Publica un plan y deja que otros se sumen.'],
      ['📡', 'Radar', 'Descubre a personas que están a unos metros.'],
      ['💬', 'Matches y chats', 'Conversa con quienes conectaste.'],
    ],
    status: 'store',
    appStore: 'https://apps.apple.com/app/id6780263578',
    website: 'https://gisi.online',
    tiktok: 'https://www.tiktok.com/@gisi.online/video/7697124877437865232',
  },
  {
    slug: 'moni',
    name: 'Moni',
    day: 3,
    tagline: 'Que no se te olvide cuánto te deben.',
    description:
      'Anotas lo que prestaste, ves lo que ya te devolvieron y le mandas el recordatorio por WhatsApp con un toque. Además, analiza tus gastos del mes.',
    features: [
      ['🤝', 'Préstamos a amigos', 'Registra a quién le prestaste y cuánto.'],
      ['💸', 'Lo que te devolvieron', 'Mira el saldo pendiente de cada préstamo.'],
      ['💬', 'Recordatorio por WhatsApp', 'Un mensaje listo para enviar.'],
      ['📊', 'Análisis de gastos', 'En qué se va tu plata cada mes.'],
    ],
    status: 'review',
    tiktok: 'https://www.tiktok.com/@gisi.online/video/7697125321853717776',
    keyword: 'PLATA',
  },
  {
    slug: 'fitio',
    name: 'Fitio',
    day: 4,
    tagline: 'Una foto de tu plato y la IA cuenta las calorías.',
    description:
      'Le tomas foto a tu comida y la IA te dice qué es y cuántas calorías tiene. También puedes escribir lo que comiste y ver tu día completo.',
    features: [
      ['📸', 'Calorías con una foto', 'La IA reconoce el plato y estima las calorías.'],
      ['⌨️', 'Registro por texto', 'Escribe lo que comiste y listo.'],
      ['📈', 'Tu día completo', 'Calorías y comidas del día en un vistazo.'],
    ],
    status: 'review',
    website: 'https://fitio-pi.vercel.app',
    tiktok: 'https://www.tiktok.com/@gisi.online/video/7697125807419837704',
    keyword: 'FOTO',
  },
]

export const tutorial = {
  title: 'Hice una app y su TikTok solo con IA',
  description: 'Mis 4 pasos con Claude Code: idea → código → la prueba sola → el video.',
  tiktok: 'https://www.tiktok.com/@gisi.online/video/7697126326360247560',
}

export const getProject = (slug: string) => projects.find((p) => p.slug === slug)
