import styled from "styled-components/native";

export const StyledMediaWrapper = styled.View`
  margin-bottom: 32px;
`;

export const StyledMedia = styled.Image`
  width: 100%;
  height: 80%;
`;

export const StyledTextWrapper = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 16px;
`;

export const StyledText = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 18px;
`;


export const StyledButtonWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 16px 16px;
`;

export const StyledButton = styled.TouchableOpacity`
  padding: 16px;
  border-radius: 32px;
  background-color: pink;
`;

export const StyledButtonLabel = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 20px;
`;
