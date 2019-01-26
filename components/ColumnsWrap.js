import styled from "styled-components";

const Column = styled.div`
    flex-wrap: wrap;
`;

export default function ColumnsWrap(props) {
    const {children, className} = props;
    return <Column className={className}>{children}</Column>;
}
