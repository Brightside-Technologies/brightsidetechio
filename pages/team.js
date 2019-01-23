import MainLayout from "../containers/MainLayout";
import PageTitle from "../components/PageTitle";

export default function TeamPage() {
    return (
        <MainLayout>
            <section className="section">
                <div className="container">
                    <PageTitle title="Team" />
                </div>
            </section>
        </MainLayout>
    );
}
