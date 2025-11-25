import React from "react";
import PropTypes from "prop-types";
import { Alert } from "@openedx/paragon";
import { FormattedMessage } from "@edx/frontend-platform/i18n";
import { getConfig } from "@edx/frontend-platform";

const AgeMessage = ({ accountSettingsUrl }) => (
    <Alert variant="info" dismissible={false} show>
        <Alert.Heading id="profile.age.headline">
            <FormattedMessage
                id="profile.age.cannotShare"
                defaultMessage="Hồ sơ của bạn không thể được chia sẻ."
                description="Error message indicating that the user's profile cannot be shared"
            />
        </Alert.Heading>
        <FormattedMessage
            id="profile.age.details"
            defaultMessage="Để chia sẻ hồ sơ của bạn với những người học khác trên {siteName}, bạn phải xác nhận rằng bạn trên 6 tuổi."
            description="Error message"
            tagName="p"
            values={{
                siteName: getConfig().SITE_NAME,
            }}
        />
        <Alert.Link href={accountSettingsUrl}>
            <FormattedMessage
                id="profile.age.set.date"
                defaultMessage="Đặt ngày sinh của bạn"
                description="Label on a link to set birthday"
            />
        </Alert.Link>
    </Alert>
);

AgeMessage.propTypes = {
    accountSettingsUrl: PropTypes.string.isRequired,
};

export default AgeMessage;
