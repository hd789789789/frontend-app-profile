import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  'profile.name.full.name': {
    id: 'profile.name.full.name',
    defaultMessage: 'Họ và tên',
    description: 'A section of a user profile',
  },
  'profile.name.details': {
    id: 'profile.name.details',
    defaultMessage: 'Đây là tên xuất hiện trong tài khoản của bạn và trên chứng chỉ của bạn.',
    description: 'Describes the area for a user to update their name.',
  },
  'profile.name.empty': {
    id: 'profile.name.empty',
    defaultMessage: 'Thêm tên',
    description: 'The affordance to add a name to a user’s profile.',
  },
});

export default messages;
