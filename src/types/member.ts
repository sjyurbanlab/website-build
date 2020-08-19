export type Member = {
  id: string | number;
  avatar: string;
  firstName: string;
  lastName: string;
  salutation?: string;
  position: string;
  email: string;
  introduction: string[];
  affiliationPeriodStart?: Date;
  affiliationPeriodEnd?: Date;
  cv?: string;
};
