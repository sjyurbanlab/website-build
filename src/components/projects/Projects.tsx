import React, { FC } from 'react';

import { Pagination } from '@components/generic';
import { ProjectCard } from './ProjectCard';

interface ProjectsProps {
  projects: any[];
  pathname: string;
  projectCountPerPage?: number;
}

export const Projects: FC<ProjectsProps> = ({
  projects,
  pathname,
  projectCountPerPage,
}) => {
  const groupedProjects = [];
  const groupSize = projectCountPerPage || 8;

  for (let i = 0; i < Math.ceil(projects.length / groupSize); i++)
    groupedProjects.push(
      projects.slice(i * groupSize, i * groupSize + groupSize)
    );

  const pages = groupedProjects.map((projects, index) => (
    <div key={index} className={'space-y-8'}>
      {projects.map(({ name, node: { frontmatter } }, index) => (
        <div key={index}>
          <ProjectCard {...frontmatter} pageLink={`${pathname}/${name}`} />
        </div>
      ))}
    </div>
  ));

  return <Pagination pages={pages} />;
};
