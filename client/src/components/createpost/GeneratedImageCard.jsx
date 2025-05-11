import { CircularProgress } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  min-height: 300px;
  padding: 16px;
  border: 2px dashed ${({ theme }) => theme.yellow};
  color: ${({ theme }) => theme.arrow + 80};
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 24px;
  background: ${({ theme }) => theme.black + 50};
`;

const GeneratedImageCard = ({ src, loading }) => {
  return (
    <Container>
      {loading ? (
        <>
          <CircularProgress
            sx={{
              color: "inherit",
              width: "24px",
              height: "24px",
              margin: "4px",
            }}
          />
          Generating Image...{"   "}{" "}
        </>
      ) : (
        <>{src ? <Image src={src} /> : "Write a prompt to generate an image"}</>
      )}
    </Container>
  );
};

export default GeneratedImageCard;
