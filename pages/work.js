import MainLayout from "../containers/MainLayout";
import PageTitle from "../components/PageTitle";
import AttentionBanner from "../components/AttentionBanner";

export default function WorkPage() {
    return (
        <MainLayout>
            <section className="section">
                <PageTitle title="Work" />
                <div className="container content is-medium">
                    <p>
                        The Owl always takes her sleep during the day. Then after sundown, when the
                        rosy light fades from the sky and the shadows rise slowly through the wood,
                        out she comes ruffling and blinking from the old hollow tree. Now her weird
                        "hoo-hoo-hoo-oo-oo" echoes through the quiet wood, and she begins her hunt
                        for the bugs and beetles, frogs and mice she likes so well to eat.
                    </p>
                </div>
            </section>
        </MainLayout>
    );
}
