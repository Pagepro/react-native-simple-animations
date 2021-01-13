import React, { useCallback, useRef } from "react";
import { Animated } from "react-native";
import randomColor from "randomcolor";
import { StyledWrapper } from "../Home/styles";
import {
  StyledBox,
  StyledButton,
  StyledButtonLabel,
  StyledButtonWrapper,
} from "./styles";

const Color: React.FC = () => {
  const animationValue = useRef(new Animated.Value(0)).current;

  const changeColor = useCallback(() => {
    Animated.timing(animationValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [animationValue]);

  const colorInterpolation = animationValue.interpolate({
    inputRange: [0, 1],
    outputRange: [randomColor(), randomColor()],
  });

  return (
    <StyledWrapper>
      <StyledBox
        as={Animated.View}
        style={{ backgroundColor: colorInterpolation }}
      />
      <StyledButtonWrapper>
        <StyledButton onPress={() => changeColor()}>
          <StyledButtonLabel>Click me</StyledButtonLabel>
        </StyledButton>
      </StyledButtonWrapper>
      <StyledButtonWrapper>
        <StyledButton onPress={() => animationValue.setValue(0)}>
          <StyledButtonLabel>Click me to reset</StyledButtonLabel>
        </StyledButton>
      </StyledButtonWrapper>
    </StyledWrapper>
  );
};

export default Color;
