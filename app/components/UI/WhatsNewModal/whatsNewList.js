import { strings } from '../../../../locales/i18n';

export const whatsNew = {
	// All users that have <4.3.0 and are updating to >=4.3.0 should see
	onlyUpdates: true, // Only users who updated the app will see this, not newly installs
	maxLastAppVersion: '4.3.0', // Only users who had a previous version <4.3.0 version will see this
	minAppVersion: '4.3.0', // Only users who updated to a version >= 4.3.0 will see this
	slides: [
		[
			{ type: 'image', image: require('../../../images/whats-new-token-detection.png') }, // eslint-disable-line
			{ type: 'title', title: strings('whats_new.feature_token_detection_title') },
			{ type: 'description', description: strings('whats_new.feature_token_detection_description') },
			{
				type: 'button',
				buttonType: 'normal',
				buttonText: strings('whats_new.feature_token_detection_button_text'),
				onPress: (props) =>
					props.navigation.navigate('SettingsView', {
						screen: 'SettingsFlow',
						params: { screen: 'SecuritySettings' },
					}),
			},
		],
		[
			{ type: 'title', title: strings('whats_new.feature_token_security_title_1') },
			{ type: 'description', description: strings('whats_new.feature_token_security_description_1') },
			{ type: 'title', title: strings('whats_new.feature_token_security_title_2') },
			{ type: 'description', description: strings('whats_new.feature_token_security_description_2') },
			{ type: 'image', image: require('../../../images/whats-new-token-security.png') }, // eslint-disable-line
			{
				type: 'button',
				buttonType: 'blue',
				buttonText: strings('whats_new.feature_token_security_button_text'),
				onPress: () => null,
			},
		],
	],
};

export default whatsNew;
