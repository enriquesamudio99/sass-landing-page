import './App.scss';

import { ActiveFollowers, ActiveUsers, Companies, CTA, FAQs, Features, Footer, Header, Testimonials } from './containers';

function App() {

    return (
        <>
            <Header />
            <main className="main">
                <Companies />
                <Features />
                <ActiveFollowers />
                <ActiveUsers />
                <Testimonials />
                <FAQs />
                <CTA />
            </main>
            <Footer />
        </>
    );

};

export default App;
