import Section from "./Section";
import SectionTitle from "./SectionTitle";

export default function WhatWeDo() {
    return (
        <Section>
            <SectionTitle title="We are a web development company" />
            <div className="content is-medium">
                <p>
                    We build web sites and web applications and provide custom
                    integrations with external services to give your website
                    superpowers.
                </p>
            </div>
        </Section>
    );
}
