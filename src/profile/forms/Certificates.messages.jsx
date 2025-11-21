import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  'profile.certificates.my.certificates': {
    id: 'profile.certificates.my.certificates',
    defaultMessage: 'Chứng chỉ của tôi',
    description: 'A section of a user profile',
  },
  'profile.certificates.view.certificate': {
    id: 'profile.certificates.view.certificate',
    defaultMessage: 'Xem chứng chỉ',
    description: 'A call to action to view a certificate',
  },
  'profile.certificates.types.verified': {
    id: 'profile.certificates.types.verified',
    defaultMessage: 'Chứng chỉ đã xác minh',
    description: 'A type of certificate a user may have earned',
  },
  'profile.certificates.types.professional': {
    id: 'profile.certificates.types.professional',
    defaultMessage: 'Chứng chỉ chuyên nghiệp',
    description: 'A type of certificate a user may have earned',
  },
  'profile.certificates.types.unknown': {
    id: 'profile.certificates.types.unknown',
    defaultMessage: 'Chứng chỉ',
    description: 'The string to display when a certificate is of an unknown type',
  },
});

export default messages;
