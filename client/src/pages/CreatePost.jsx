import React from "react";
import styled from "styled-components";
import GenerateImageForm from "../components/createpost/GenerateImageForm";
import GeneratedImageCard from "../components/createpost/GeneratedImageCard";
import { useState } from "react";

const Container = styled.div`
  height: 100%;
  overflow-Y: scroll;
  padding: 30px 30px;
  padding-bottom: 50px;
  background: ${({ theme }) => theme.bg};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  @media only screen and (max-width: 768px) {
    padding: 6px 10 px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  height: fit-content;
  ${'' /* flex: 1; */}
  gap: 8%;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const CreatePost = () => {
  const [generateImageLoading, setGenerateImageLoading] = useState(false);
  const [createPostLoading, setCreatePostLoading] = useState(false);
  const [post, setPost] = useState({
    author: "John Doe",
    prompt: "A beautiful sunset over the mountains",
    photo: "/img-1.jpg",
  });
  return (
    <Container>
      <Wrapper>
        <GenerateImageForm
          post={post}
          setPost={setPost}
          createPostLoading={createPostLoading}
          setCreatePostLoading={setCreatePostLoading}
          generateImageLoading={generateImageLoading}
          setGenerateImageLoading={setGenerateImageLoading}
        />
        <GeneratedImageCard src={post?.photo} loading={generateImageLoading} />
      </Wrapper>
    </Container>
  );
};

export default CreatePost;
