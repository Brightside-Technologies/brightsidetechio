import Link from "next/link";
import styled from "styled-components";

const Hero = styled.div`
    &::after {
        content: "";
        background-image: url("./static/bg.jpg");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        opacity: 0.5;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        position: absolute;
        z-index: -1;
    }
`;

export default function HomeHero() {
    return (
        <Hero className="hero is-fullheight is-fullheight-with-navbar">
            <div className="hero-body">
                <div className="container has-text-centered">
                    <h1 className="is-family-sans-serif mb-5 title has-text-grey-darker is-1 animated fadeInUp">
                        Modern Technology Solutions
                    </h1>
                    <h2 className="subtitle has-text-dark has-text-darker is-uppercase animated fadeInDown">
                        Providing digital transformation services for the small
                        business community
                    </h2>
                    <Link href="/contact">
                        <a className="button shadow is-uppercase is-large is-primary has-text-dark is-rounded has-text-weight-bold">
                            Find Out More
                        </a>
                    </Link>
                </div>
            </div>
        </Hero>
    );
}
