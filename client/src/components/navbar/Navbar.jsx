import React from "react";
import styled from "styled-components";
import Button from "../buttons/Button";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import ExploreRoundedIcon from '@mui/icons-material/ExploreRounded';
import { useLocation, useNavigate } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.navbar};
  color: ${({ theme }) => theme.text_primary};
  fontweight: bold;
  fontsize: 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 50px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  @media only screen and (max-width: 600px) {
    padding: 10px 12px;
  }
`;
const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.split("/");
  return (
    <Container>
      GenAI
      {path[1] === "post" ? (
        <Button
        onClick={() => navigate("/")}
        text="Explore posts"
        leftIcon={
          <ExploreRoundedIcon
            sx={{
              fontSize: "18px",
            }}
          />
        }
        type="secondary"
      />
      ) : (
      <Button
        onClick={() => navigate("/post")}
        text="Create new post"
        leftIcon={
          <AddCircleOutlinedIcon
            sx={{
              fontSize: "18px",
            }}
          />
        }
      />
      )}
    </Container>
  );
};

export default Navbar;
