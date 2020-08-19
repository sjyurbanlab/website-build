import rawMembers from './members.json';
import { Member } from '@src/types/member';

export const membersData: Member[] = Object.entries(rawMembers)
  .map(([key, member]) => ({
    id: Number(key),
    avatar: member.avatar,
    firstName: member.firstName,
    lastName: member.lastName,
    // @ts-ignore
    salutation: member.salutation,
    position: member.position,
    email: member.email,
    introduction: member.introduction,
    affiliationPeriodStart: member.affiliationPeriodStart
      ? new Date(member.affiliationPeriodStart)
      : undefined,
    affiliationPeriodEnd: member.affiliationPeriodEnd
      ? new Date(member.affiliationPeriodEnd)
      : undefined,
    cv: member.cv,
  }))
  .sort((a, b) => a.id - b.id);
