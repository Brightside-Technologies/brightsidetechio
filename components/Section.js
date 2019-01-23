export default function Section(props) {
    const {children} = props;
    return (
        <section className="section">
            <div className="container">{children}</div>
        </section>
    );
}
