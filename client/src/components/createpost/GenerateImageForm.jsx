import React from "react";
import styled from "styled-components";
import Button from "../buttons/Button";
import TextInput from "../input/TextInput";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";

const Form = styled.div`
  flex: 1;
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 9%;
  justify-content: center;
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
`;

const Desc = styled.div`
  font-size: 17px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secodary};
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
`;

const Action = styled.div`
  flex: 1;
  display: flex;
  gap: 8px;
`;

const GenerateImageForm = ({
  post,
  setPost,
  createPostLoading,
  setCreatePostLoading,
  generateImageLoading,
  setGenerateImageLoading,
}) => {
    const GenerateImageFun = () => {
        setGenerateImageLoading(true);
    }
    const CreatePostFun = () => {
        setCreatePostLoading(true);
    }
  return (
    <Form>
      <Top>
        <Title>GENERATE IMAGE WITH PROMPT</Title>
        <Desc>Write your prompt according to the image you want to create</Desc>
      </Top>
      <Body>
        <TextInput
          label="Author"
          placeholder="Enter Your Name..."
          name="name"
          value={post?.author}
          handelChange={(e) => setPost({ ...post, author: e.target.value })}
        />
        <TextInput
          label="Prompt"
          placeholder="Write a prompt for image you want to create..."
          name="name"
          rows="8"
          textArea
          value={post?.prompt}
          handelChange={(e) => setPost({ ...post, prompt: e.target.value })}
        />
        **You can also post the image to the community after generating it.**
      </Body>
      <Action>
        <Button
          text="Generate Image"
          flex
          leftIcon={<AutoAwesomeRoundedIcon />}
          isLoading={generateImageLoading}
          isDisabled={post?.prompt === ""}
          onClick={()=> GenerateImageFun()}
        />
        <Button
          text="Post Image"
          flex
          type="secondary"
          leftIcon={<CreateRoundedIcon />}
          isLoading={createPostLoading}
          isDisabled={
            post?.author === "" || post?.prompt === "" || post?.photo === ""
          }
          onClick={()=> CreatePostFun()}
        />
      </Action>
    </Form>
  );
};

export default GenerateImageForm;
