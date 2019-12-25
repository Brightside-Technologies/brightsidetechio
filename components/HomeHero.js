import Link from "next/link";
import styled from "styled-components";

const Hero = styled.div`
    &::after {
        content: "";
        background-image: url("./bg.jpg");
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
                <div className="container">
                    {/* <h1 className="is-family-sans-serif mb-5 title has-text-grey-darker is-1 animated fadeInUp">
                        Modern Technology Solutions
                    </h1>
                    <h2 className="subtitle has-text-dark has-text-darker is-uppercase animated fadeInDown">
                        Providing digital transformation services for the small
                        business community
                    </h2> */}
                    <div className="columns">
                        <div className="column is-two-thirds">
                            <h1 className="is-family-sans-serif title has-text-grey-darker is-1 animated fadeInUp">
                                Websites done right.
                            </h1>
                            {/* <h2 className="subtitle heading is-size-6 has-text-weight-bold has-text-link">
                                Digital Transformation &amp; Modern Technology Solutions
                            </h2> */}
                            <p className="is-size-5 animated fadeInUp">
                                Let Brightside take your website to the next
                                level. If you don't have one, we got you, too.
                                No Wordpress. All custom websites tailored to
                                fit you and your business's needs. Get a free
                                consultation today, or take a peak at some of
                                our previous projects.
                            </p>
                        </div>
                    </div>

                    <Link href="/contact">
                        <a className="button shadow is-uppercase is-primary has-text-dark has-text-weight-bold animated fadeInUp">
                            Find Out More
                        </a>
                    </Link>
                </div>
            </div>
        </Hero>
    );
}
