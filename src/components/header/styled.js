import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 4px;

    input {
        border: 1px solid #ccc;
        border-radius: 8px;
        height: 48px;
        padding: 4px;
        width: 100%;
        margin-right: 0 8px;

    }

    button{
        background-color: #ccc;
        padding: 8px 16px;
        margin: 0 8px;
        border-radius: 8px;
        font-size: 16px;

        span {
            font-weight: bold;
        }
    }
`;