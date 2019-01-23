import MainLayout from "../containers/MainLayout";
import PageTitle from "../components/PageTitle";

export default function ContactPage() {
    return (
        <MainLayout>
            <section className="section">
                <div className="container">
                    <PageTitle title="Contact" />
                </div>
            </section>
        </MainLayout>
    );
}
