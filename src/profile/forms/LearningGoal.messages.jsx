import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  'profile.learningGoal.learningGoal': {
    id: 'profile.learningGoal.learningGoal',
    defaultMessage: 'Mục tiêu học tập',
    description: 'A section of a user profile that displays their current learning goal.',
  },
  'profile.learningGoal.options.start_career': {
    id: 'profile.learningGoal.options.start_career',
    defaultMessage: 'Tôi muốn bắt đầu sự nghiệp',
    description: 'Selected by user if their goal is to start their career.',
  },
  'profile.learningGoal.options.advance_career': {
    id: 'profile.learningGoal.options.advance_career',
    defaultMessage: 'Tôi muốn thăng tiến trong sự nghiệp',
    description: 'Selected by user if their goal is to advance their career.',
  },
  'profile.learningGoal.options.learn_something_new': {
    id: 'profile.learningGoal.options.learn_something_new',
    defaultMessage: 'Tôi muốn học điều gì đó mới',
    description: 'Selected by user if their goal is to learn something new.',
  },
  'profile.learningGoal.options.something_else': {
    id: 'profile.learningGoal.options.something_else',
    defaultMessage: 'Khác',
    description: 'Selected by user if their goal is not described by the other choices.',
  },
});

export default messages;
