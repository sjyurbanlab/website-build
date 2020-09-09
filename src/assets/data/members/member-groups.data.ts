import rawMemberGroups from './member-groups.json';
import { MemberGroup } from '@src/types/memberGroup';

export const memberGroupsData: MemberGroup[] = Object.entries(
  rawMemberGroups
).map(([groupName, memberGroup]: [string, any]) => ({
  groupName,
  members: Object.entries(memberGroup)
    .map(([key, member]: [string, any]) => ({
      id: Number(key),
      avatar: member.avatar,
      firstName: member.firstName,
      lastName: member.lastName,
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
    .sort((a, b) => a.id - b.id),
}));
