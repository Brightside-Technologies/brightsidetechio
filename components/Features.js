import Section from "./Section";
import SectionTitle from "./SectionTitle";
import ColumnsWrap from "./ColumnsWrap";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import _features from "../_data/_features";

const Card = styled.div`
    flex: 1 0 0%;
    height: 100%;
`;

export default function Features() {
    return (
        <Section>
            <SectionTitle title="What We Provide" />
            <ColumnsWrap className="columns is-variable is-8-desktop is-tablet">
                {_features.map((feature, i) => (
                    <div key={i} className="column is-half-tablet is-one-third-desktop">
                        <Card className="card">
                            <div className="card-image">
                                <figure className="image is-4by3">
                                    <img src={feature.image} alt={feature.title} />
                                </figure>
                            </div>
                            <div className="card-content">
                                <p className="has-text-centered title is-4">{feature.title}</p>
                                <div className="content">
                                    <ReactMarkdown source={feature.description} />
                                </div>
                            </div>
                        </Card>
                    </div>
                ))}
            </ColumnsWrap>
        </Section>
    );
}
