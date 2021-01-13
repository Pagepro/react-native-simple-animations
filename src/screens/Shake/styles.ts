import styled from "styled-components/native";

export const StyledBoxWrapper = styled.View`
  width: 100%;
  height: 400px;
  justify-content: center;
  align-items: center;
`;

export const StyledBox = styled.View`
  height: 200px;
  width: 200px;
  flex-shrink: 0;
  flex-direction: row;
  background-color: limegreen;
`;

export const StyledButtonWrapper = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 32px;
`;

export const StyledButton = styled.TouchableOpacity`
  background-color: orange;
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
