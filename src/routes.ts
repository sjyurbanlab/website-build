export type Route = {
  path: string;
  title: string;
  isNotALink?: boolean;
  childrenRoutes?: Route[];
};

export const routes: Route[] = [
  {
    path: '/',
    title: 'Home',
  },
  {
    path: '/research-themes',
    title: 'Research Themes',
    isNotALink: true,
    childrenRoutes: [
      {
        path: '/urban-land-atmosphere-interaction',
        title: 'Urban Land-Atmosphere Interaction',
      },
      { 
        path: '/urban-hydro-climate', 
        title: 'Urban Hydro-Climate',
      },
      {
        path: '/urban-green-infrastructure',
        title: 'Urban Green Infrastructure',
      },
      {
        path: '/urban-blue-infrastructure',
        title: 'Urban Blue Infrastructure',
      },
      {
        path: '/building-energy-efficiency',
        title: 'Building Energy Efficiency',
      },
      {
        path: '/urban-fluid-mechanics',
        title: 'Urban Fluid Mechanics',
      },
      {
        path: '/urban-biometeorology',
        title: 'Urban Biometeorology',
      },
    ],
  },
  {
    path: '/projects',
    title: 'Projects',
    isNotALink: true,
    childrenRoutes: [
      { path: '/ongoing-projects', title: 'Ongoing Projects' },
      { path: '/past-projects', title: 'Past Projects' },
    ],
  },
  {
    path: '/members',
    title: 'Members',
    isNotALink: true,
    childrenRoutes: [
      { path: '/present', title: 'Present' },
      { path: '/alumni', title: 'Alumni' },
    ],
  },
  {
    path: '/team-activities',
    title: 'Team Activities',
    isNotALink: true,
    childrenRoutes: [
      { path: '/conferences-and-meetings', title: 'Conferences and Meetings' },
      { path: '/fun', title: 'Work-life Balance' },
    ],
  },
];
