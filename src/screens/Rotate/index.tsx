import React, { useCallback, useRef } from "react";
import { Animated, Easing } from "react-native";
import {
  StyledBox,
  StyledBoxWrapper,
  StyledButton,
  StyledButtonLabel,
  StyledButtonWrapper,
} from "./styles";

const Rotate: React.FC = () => {
  const animationValue = useRef(new Animated.Value(0)).current;

  const rotate = useCallback(() => {
    Animated.loop(
      Animated.timing(animationValue, {
        duration: 1000,
        toValue: 1,
        useNativeDriver: true,
        easing: Easing.linear,
      })
    ).start();
  }, [animationValue]);

  const arrowAngle = animationValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0rad", `${Math.PI}rad`],
  });

  return (
    <>
      <StyledBoxWrapper>
        <StyledBox
          as={Animated.View}
          style={{ transform: [{ rotate: arrowAngle }] }}
        />
      </StyledBoxWrapper>
      <StyledButtonWrapper>
        <StyledButton onPress={() => rotate()}>
          <StyledButtonLabel>Click me</StyledButtonLabel>
        </StyledButton>
      </StyledButtonWrapper>
    </>
  );
};

export default Rotate;
