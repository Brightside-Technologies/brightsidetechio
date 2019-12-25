import getYear from "date-fns/get_year";
import styled from "styled-components";

const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export default function Footer() {
    return (
        <StyledFooter className="footer has-text-light has-background-dark">
            <small>
                &copy; {getYear(new Date())} Brightside Tech, LLC. &nbsp;
            </small>
            <strong className="has-text-light">
                Founded with 💖 in the Coachella Valley
            </strong>
        </StyledFooter>
    );
}
