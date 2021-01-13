import React, { useCallback, useRef, useState } from "react";
import { Animated } from "react-native";

import {
  StyledButton,
  StyledButtonLabel,
  StyledButtonWrapper,
  StyledMedia,
  StyledMediaWrapper,
  StyledText,
  StyledTextWrapper,
} from "./styles";

const Opacity: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const mediaOpacity = useRef(new Animated.Value(0)).current;
  const textOpacity = useRef(new Animated.Value(0)).current;

  const fadeIn = useCallback(() => {
    // Animated.sequence([
    Animated.timing(mediaOpacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    // Animated.timing(textOpacity, {
    //   toValue: 1,
    //   duration: 200,
    //   useNativeDriver: true,
    // }),
    // ]).start();
  }, [mediaOpacity]);

  const fadeOut = useCallback(() => {
    // Animated.sequence([
    // Animated.timing(textOpacity, {
    //   toValue: 0,
    //   duration: 200,
    //   useNativeDriver: true,
    // }),
    Animated.timing(mediaOpacity, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    // ]).start();
  }, [mediaOpacity]);

  const toggleAnimation = useCallback(() => {
    isVisible ? fadeOut() : fadeIn();
    setIsVisible((currentToggleState) => !currentToggleState);
  }, [isVisible]);

  return (
    <>
      <StyledMediaWrapper
        as={Animated.View}
        style={{
          opacity: mediaOpacity,
        }}
      >
        <StyledMedia source={require("../../../assets/cat.jpg")} />
        <StyledTextWrapper
          as={Animated.View}
          style={{
            opacity: textOpacity,
          }}
        >
          <StyledText>Now give me a treat!</StyledText>
        </StyledTextWrapper>
      </StyledMediaWrapper>
      <StyledButtonWrapper>
        <StyledButton onPress={toggleAnimation}>
          <StyledButtonLabel>Click me</StyledButtonLabel>
        </StyledButton>
      </StyledButtonWrapper>
    </>
  );
};

export default Opacity;
