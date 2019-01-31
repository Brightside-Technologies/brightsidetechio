import MainLayout from "../containers/MainLayout";
import Section from "../components/Section";
import styled from "styled-components";

const EmailAnchor = styled.a`
    text-underline: none;
`;

const ContactForm = styled.div`
    position: relative;
    z-index: 2;
`;

const Diagonal = styled.svg`
    margin-top: -350px;
    position: relative;
    z-index: 1;
`;

export default function ContactPage() {
    return (
        <MainLayout>
            <div className="hero is-fullheight is-fullheight-with-navbar">
                <Section>
                    <h1 className="heading is-size-4 is-size-6-mobile has-text-weight-bold has-text-link">
                        Get in Touch
                    </h1>
                    <h2 className="title is-size-1 is-size-3-mobile">
                        Let's build your next project!
                    </h2>
                </Section>
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <ContactForm className="box has-background-light">
                            <p className="has-text-centered subtitle">Email us at</p>
                            <p className="title has-text-centered is-display-4 is-size-4-mobile">
                                <EmailAnchor
                                    className="has-text-link"
                                    href="mailto:hello@brightsidetech.io">
                                    hello@brightsidetech.io
                                </EmailAnchor>
                            </p>
                        </ContactForm>
                    </div>
                </div>
                <Diagonal
                    width="100%"
                    height="350px"
                    class="diagonal"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none">
                    <polygon fill="#fded13" points="0,0 0,200 50,100 200,100" />
                </Diagonal>
            </div>
        </MainLayout>
    );
}
