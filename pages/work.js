import MainLayout from "../containers/MainLayout";
import Section from "../components/Section";
import ProjectMedia from "../components/ProjectMedia";

import _work from "../_data/_work.json";

export default function WorkPage() {
    return (
        <MainLayout>
            <Section>
                <h1 className="heading is-size-4 is-size-6-mobile has-text-weight-bold has-text-link">
                    Our Work
                </h1>
                <h2 className="title is-size-1 is-size-3-mobile">
                    Some of our most recent projects.
                </h2>
            </Section>
            <Section>
                {_work.map((work, i) => (
                    <ProjectMedia key={i} {...work} />
                ))}
            </Section>
        </MainLayout>
    );
}
