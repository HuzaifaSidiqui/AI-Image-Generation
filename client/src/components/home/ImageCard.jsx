import React from "react";
import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import FileSaver from "file-saver"
import { Avatar } from "@mui/material";
import DownloadForOfflineRoundedIcon from "@mui/icons-material/DownloadForOfflineRounded";

const Card = styled.div`
  position: relative;
  display: flex;
  border-radius: 20px;
  box-shadow: 1px 2px 40px 8px ${({ theme }) => theme.black + 60};
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    box-shadow: 1px 2px 40px 8px ${({ theme }) => theme.black + 60};
    scale: 1.05;
  }
  &:nth-child(7n + 1) {
    grid-column: auto/span 2;
    grid-row: auto/span 2;
  }
`;
const HoverOverLay = styled.div`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2px;
  backdrop-filter: blur(2px);
  background: rgba(0, 0, 0, 0.5);
  color: ${({ theme }) => theme.white};
  transition: opacity 0.3s ease;
  justify-content: end;
  padding: 16px;
  ${Card}:hover & {
    opacity: 1;
  }
`;
const Prompt = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.white};
`;
const Author = styled.div`
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.white};
`;

const ImageCard = ({item}) => {
  return (
    <Card>
      <LazyLoadImage width="100%" src={item?.photo} />
      <HoverOverLay>
        <div style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
        }}>
          <Prompt>{item?.prompt}</Prompt>
          <Author>
            <Avatar sx={{ width: "32px", height: "32px" }}>{item?.author[0]}</Avatar>
            {item?.author}
          </Author>
          <DownloadForOfflineRoundedIcon onClick={()=> FileSaver.saveAs(item?.photo,"download.jpg")} />
        </div>
      </HoverOverLay>
    </Card>
  );
};

export default ImageCard;
