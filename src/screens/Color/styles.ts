import styled from "styled-components/native";

export const StyledBox = styled.View`
  padding-top: 100%;
  width: 100%;
`;

export const StyledButtonWrapper = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 32px;
`;

export const StyledButton = styled.TouchableOpacity`
  background-color: purple;
  padding: 16px;
  flex-shrink: 0;
  border-radius: 8px;
`;

export const StyledButtonLabel = styled.Text`
  color: #fff;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
`;
