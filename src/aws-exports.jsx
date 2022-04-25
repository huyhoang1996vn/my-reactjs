import Amplify, { Auth } from 'aws-amplify';

const awsExports = {
    Auth: {

        // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
        identityPoolId: 'ap-northeast-1:2f40e824-31a1-4195-b5ad-1d9ef81dc8d3',
        
        // REQUIRED - Amazon Cognito Region
        region: 'ap-northeast-1',

        // OPTIONAL - Amazon Cognito Federated Identity Pool Region 
        // Required only if it's different from Amazon Cognito Region
        identityPoolRegion: 'ap-northeast-1',

        // OPTIONAL - Amazon Cognito User Pool ID
        userPoolId: 'ap-northeast-1_7MY0Q9lry',

        // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
        // userPoolWebClientId: 'a1b2c3d4e5f6g7h8i9j0k1l2m3',

        // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
        mandatorySignIn: false,

        // OPTIONAL - Configuration for cookie storage
        // Note: if the secure flag is set to true, then the cookie transmission requires a secure protocol
        cookieStorage: {
        // REQUIRED - Cookie domain (only required if cookieStorage is provided)
            domain: '.yourdomain.com',
        // OPTIONAL - Cookie path
            path: '/',
        // OPTIONAL - Cookie expiration in days
            expires: 365,
        // OPTIONAL - See: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite
            sameSite: "strict" | "lax",
        // OPTIONAL - Cookie secure flag
        // Either true or false, indicating if the cookie transmission requires a secure protocol (https).
            secure: true
        },

        // OPTIONAL - customized storage object
        // storage: MyStorage,
        
        // OPTIONAL - Manually set the authentication flow type. Default is 'USER_SRP_AUTH'
        // authenticationFlowType: 'USER_PASSWORD_AUTH',

        // OPTIONAL - Manually set key value pairs that can be passed to Cognito Lambda Triggers
        // clientMetadata: { myCustomKey: 'myCustomValue' },

         // OPTIONAL - Hosted UI configuration
        // oauth: {
        //     domain: 'your_cognito_domain',
        //     scope: ['phone', 'email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
        //     redirectSignIn: 'http://localhost:3000/',
        //     redirectSignOut: 'http://localhost:3000/',
        //     responseType: 'code' // or 'token', note that REFRESH token will only be generated when the responseType is code
        // }
    }
};
export default awsExports;

// You can get the current config object