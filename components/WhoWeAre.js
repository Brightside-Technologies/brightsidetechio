import Section from "./Section";
import SectionTitle from "./SectionTitle";

export default function WhoWeAre() {
    return (
        <Section>
            <SectionTitle title="Who We Are" />
            <div className="content is-medium">
                <p>
                    Our company was founded to provide businesses with accessible, secure and
                    performance-enhanced websites and other digital services. We want to help our
                    clients maximize their potential by bringing their businesses to full digital
                    maturity while also maintaining a sensible price. Because we believe technology
                    should be accessible to small and large businesses alike, we are determined to
                    work with you to elevate your company through affordable developmental services
                    and technical consulting.
                </p>
            </div>
        </Section>
    );
}
