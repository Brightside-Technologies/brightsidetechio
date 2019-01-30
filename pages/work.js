import MainLayout from "../containers/MainLayout";
import PageTitle from "../components/PageTitle";
import Section from "../components/Section";
import ProjectMedia from "../components/ProjectMedia";
import AttentionBanner from "../components/AttentionBanner";

import _work from "../_data/_work.json";

export default function WorkPage() {
    return (
        <MainLayout>
            <Section>
                <PageTitle title="Work" />
                <div className="content is-medium">
                    <p>
                        The Owl always takes her sleep during the day. Then after sundown, when the
                        rosy light fades from the sky and the shadows rise slowly through the wood,
                        out she comes ruffling and blinking from the old hollow tree. Now her weird
                        "hoo-hoo-hoo-oo-oo" echoes through the quiet wood, and she begins her hunt
                        for the bugs and beetles, frogs and mice she likes so well to eat.
                    </p>
                </div>
            </Section>
            <Section>
                {_work.map((work, i) => (
                    <ProjectMedia key={i} {...work} />
                ))}
            </Section>
        </MainLayout>
    );
}
