import Section from "./Section";
import SectionTitle from "./SectionTitle";

export default function WhatWeDo() {
    return (
        <Section>
            <SectionTitle title="What We Do" />
            {/* <h1 className="heading is-size-4 is-size-6-mobile has-text-weight-bold has-text-link">
                We are a web development agency
            </h1> */}
            <div className="content is-medium">
                <p>
                    We are a web development agency that provides digital
                    transformation services and modern technology solutions to
                    help local, small businesses compete in today's market. We
                    build websites and web applications and provide custom
                    integrations to supercharge your online presence.
                </p>
            </div>
        </Section>
    );
}
