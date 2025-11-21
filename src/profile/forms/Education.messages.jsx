import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  'profile.education.education': {
    id: 'profile.education.education',
    defaultMessage: 'Học vấn',
    description: 'A section of a user profile',
  },
  'profile.education.levels.p': {
    id: 'profile.education.levels.p',
    defaultMessage: 'Tiến sĩ',
    description: 'Selected by the user if their highest level of education is a doctorate degree.',
  },
  'profile.education.levels.m': {
    id: 'profile.education.levels.m',
    defaultMessage: "Thạc sĩ hoặc bằng chuyên môn",
    description: "Selected by the user if their highest level of education is a master's or professional degree from a college or university.",
  },
  'profile.education.levels.b': {
    id: 'profile.education.levels.b',
    defaultMessage: "Bằng Cử nhân",
    description: "Selected by the user if their highest level of education is a four year college or university bachelor's degree.",
  },
  'profile.education.levels.a': {
    id: 'profile.education.levels.a',
    defaultMessage: "Bằng Cao đẳng",
    description: "Selected by the user if their highest level of education is an associate's degree. 1-2 years of college or university.",
  },
  'profile.education.levels.hs': {
    id: 'profile.education.levels.hs',
    defaultMessage: 'Trung học phổ thông',
    description: 'Selected by the user if their highest level of education is secondary or high school.  9-12 years of education.',
  },
  'profile.education.levels.jhs': {
    id: 'profile.education.levels.jhs',
    defaultMessage: 'Trung học cơ sở',
    description: 'Selected by the user if their highest level of education is junior or middle school. 6-8 years of education.',
  },
  'profile.education.levels.el': {
    id: 'profile.education.levels.el',
    defaultMessage: 'Tiểu học',
    description: 'Selected by the user if their highest level of education is elementary or primary school.  1-5 years of education.',
  },
  'profile.education.levels.none': {
    id: 'profile.education.levels.none',
    defaultMessage: 'Không có giáo dục chính thức',
    description: 'Selected by the user to describe their education.',
  },
  'profile.education.levels.o': {
    id: 'profile.education.levels.o',
    defaultMessage: 'Giáo dục khác',
    description: 'Selected by the user if they have a type of education not described by the other choices.',
  },
});

export default messages;
