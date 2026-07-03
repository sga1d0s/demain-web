// An array of links for navigation bar
const navBarLinks = [
  { name: 'Inicio', url: '/' },
  { name: 'Empresa', url: '/empresa' },
  { name: 'Servicios', url: '/servicios' },
  { name: 'Mantenimiento', url: '/mantenimiento' },
  { name: 'Asistencia Técnica', url: '/asistencia-tecnica' },
  { name: 'Desarrollo de Software', url: '/desarrollo-software' },
  { name: 'Contacto', url: '/contacto' },
];
// An array of links for footer
const footerLinks = [
  {
    section: 'Servicios',
    links: [
      { name: 'Servicio técnico', url: '/servicios' },
      { name: 'Mantenimiento informático', url: '/mantenimiento' },
      { name: 'Asistencia remota', url: '/asistencia-tecnica' },
    ],
  },
  {
    section: 'Demain',
    links: [
      { name: 'Empresa', url: '/empresa' },
      { name: 'Contacto', url: '/contacto' },
      { name: '943 320 705', url: 'tel:+34943320705' },
      { name: 'demain@demaininformatica.com', url: 'mailto:demain@demaininformatica.com' },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: '#',
  x: '#',
  github: '#',
  google: '#',
  slack: '#',
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
