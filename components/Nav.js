import Link from "next/link";
import { withRouter } from "next/router";
import styled from "styled-components";

const NavbarLogo = styled.img`
    max-height: 2.5rem !important;
`;

class Nav extends React.Component {
    state = {
        isNavbarOpen: false
    };

    handleToggleNavbar = () => {
        const { isNavbarOpen } = this.state;
        this.setState({ isNavbarOpen: !isNavbarOpen });
    };

    render() {
        const { isNavbarOpen } = this.state;
        const { router } = this.props;
        return (
            <nav
                className="navbar is-dark shadow-sm is-fixed-top"
                role="navigation"
                aria-label="main navigation">
                <div className="navbar-brand">
                    <Link href="/">
                        <a className="navbar-item">
                            <NavbarLogo src="/logo-white.png" />
                        </a>
                    </Link>
                    <a
                        onClick={this.handleToggleNavbar}
                        role="button"
                        className={`navbar-burger burger ${
                            isNavbarOpen ? "is-active" : ""
                        }`}
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="navbarItemsWrapper">
                        <span aria-hidden="true" />
                        <span aria-hidden="true" />
                        <span aria-hidden="true" />
                    </a>
                </div>

                <div
                    id="navbarItemsWrapper"
                    className={`navbar-menu ${
                        isNavbarOpen ? "is-active" : ""
                    }`}>
                    <div className="navbar-start" />
                    <div className="navbar-end">
                        <Link href="/work">
                            <a
                                className={`navbar-item is-uppercase ${
                                    router.pathname === "/work"
                                        ? "is-active"
                                        : ""
                                }`}>
                                Work
                            </a>
                        </Link>
                        {/* <Link href="/team">
                            <a
                                className={`navbar-item is-uppercase ${
                                    router.pathname === "/team" ? "is-active" : ""
                                }`}>
                                Team
                            </a>
                        </Link> */}
                        <Link href="/contact">
                            <div className="navbar-item">
                                <a
                                    className={`button is-primary is-size-7 has-text-weight-bold has-text-dark is-uppercase ${
                                        router.pathname === "/contact"
                                            ? "is-active"
                                            : ""
                                    }`}>
                                    Hire Us
                                </a>
                            </div>
                        </Link>
                    </div>
                </div>
            </nav>
        );
    }
}

export default withRouter(Nav);
