import Link from "next/link";
import HomeHero from "../components/HomeHero";
import HomeLayout from "../containers/HomeLayout";
import AttentionBanner from "../components/AttentionBanner";
import Features from "../components/Features";
import WhatWeDo from "../components/WhatWeDo";

function HomePage() {
    return (
        <HomeLayout>
            <HomeHero />
            <WhatWeDo />
            <Features />
            <AttentionBanner>
                <p className="is-size-3 has-text-centered">
                    Ready to start a new project?
                </p>
                <p className="is-size-5 has-text-centered">
                    Whether you have a new idea to develop or an old, existing
                    project that needs to be modernized, we are here to listen
                </p>
                <div className="has-text-centered pt-3">
                    <Link href="/contact">
                        <a className="button shadow is-uppercase is-outlined is-dark is-rounded has-text-weight-bold">
                            Let's Talk
                        </a>
                    </Link>
                </div>
            </AttentionBanner>
        </HomeLayout>
    );
}

export default HomePage;
