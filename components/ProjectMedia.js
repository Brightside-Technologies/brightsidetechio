import Link from "next/link";
import styled from "styled-components";

const Figure = styled.figure`
    overflow: hidden;
    -moz-border-radius: 8px;
    border-radius: 8px;
`;

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Row = styled.div`
    padding: 16px 0;
    &:not(:last-child) {
        border-bottom: 2px solid rgba(219, 219, 219, 0.5);
    }
`;

export default function ProjectMedia(props) {
    const { title, image, description, url, services } = props;
    return (
        <Row className="columns">
            <div className="column is-one-quarter">
                <Figure className="image is-3by2 shadow-sm">
                    <Img src={image} />
                </Figure>
            </div>
            <Content className="column">
                <div>
                    <h2 className="subtitle is-6">{title}</h2>
                    <p className="title">{description}</p>
                    <div>
                        <p className="heading has-text-weight-bold">Services</p>
                        <div className="tags">
                            {services.map((service, i) => (
                                <div key={i} className="tag is-dark">
                                    {service}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="pt-3">
                    <a
                        href={url}
                        target="blank"
                        rel="noopener"
                        className="button is-small shadow-sm has-text-dark is-primary is-uppercase has-text-weight-bold">
                        Check it out
                    </a>
                </div>
            </Content>
        </Row>
    );
}
