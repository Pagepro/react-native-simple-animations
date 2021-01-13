import React, { useCallback, useRef } from "react";
import { Animated } from "react-native";
import {
  StyledBox,
  StyledBoxWrapper,
  StyledButton,
  StyledButtonLabel,
  StyledButtonWrapper,
} from "./styles";

const Shake: React.FC = () => {
  const animationValue = useRef(new Animated.Value(0)).current;

  const shakeAnimationSequence = [...Array(4)].map((_, index) =>
    Animated.timing(animationValue, {
      toValue: index + 1,
      duration: 100,
      useNativeDriver: false,
    })
  );

  const startShake = useCallback(() => {
    Animated.sequence(shakeAnimationSequence).start();
  }, [shakeAnimationSequence]);

  const shakeInterpolation = animationValue.interpolate({
    inputRange: [0, 1, 2, 3, 4],
    outputRange: [0, 10, -10, 10, 0],
  });

  const colorInterpolation = animationValue.interpolate({
    inputRange: [0, 1, 4],
    outputRange: ["#3FBFBF", "#F40000", "#3FBFBF"],
  });

  return (
    <>
      <StyledBoxWrapper>
        <StyledBox
          as={Animated.View}
          style={{
            transform: [{ translateX: shakeInterpolation }],
            backgroundColor: colorInterpolation,
          }}
        />
      </StyledBoxWrapper>
      <StyledButtonWrapper>
        <StyledButton onPress={() => startShake()}>
          <StyledButtonLabel>Click me</StyledButtonLabel>
        </StyledButton>
      </StyledButtonWrapper>
    </>
  );
};

export default Shake;
