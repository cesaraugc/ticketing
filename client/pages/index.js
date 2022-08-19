import buildClient from "../api/build-client";

const LandingPage = ( {currentUser} ) => {
    if (currentUser){
        return <h1>You are signed in!</h1>;
    }
    return <h1>You are not signed in.</h1>;
};

LandingPage.getInitialProps = async context => {
    const client = buildClient(context);
    const { data } = await client.get('/api/users/currentuser');
    return data;
};

export default LandingPage;