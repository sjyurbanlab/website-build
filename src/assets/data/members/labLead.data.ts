import rawLabLead from './lab-lead.json';
import { LabLead } from '@src/types/labLead';

export const labLeadData: LabLead = {
  avatar: rawLabLead['avatar'],
  firstName: rawLabLead['firstName'],
  lastName: rawLabLead['lastName'],
  salutation: rawLabLead['salutation'],
  position: rawLabLead['position'],
  email: rawLabLead['email'],
  introduction: rawLabLead['introduction'],
  researchInterests: rawLabLead['researchInterests'],
  academicMemberships: rawLabLead['academicMemberships'],
  professionalMemberships: rawLabLead['professionalMemberships'],
  teachingList: rawLabLead['teachingList'],
  // @ts-ignore
  cv: rawLabLead['cv'],
};
