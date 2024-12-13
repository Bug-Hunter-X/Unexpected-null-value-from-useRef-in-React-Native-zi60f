import React, { useRef, useEffect } from 'react';
import { Text, View } from 'react-native';

const MyComponent = () => {
  const myRef = useRef(null);

  useEffect(() => {
    // Accessing myRef.current here is safe after mounting
    console.log('myRef.current after mounting:', myRef.current);
  }, []);

  const handleClick = () => {
    // Safe way to access myRef.current after render
    if (myRef.current) {
      console.log('myRef.current:', myRef.current);
    } else {
      console.log('myRef.current is null!');
    }
  };

  return (
    <View>
      <Text ref={myRef}>This text has a ref</Text>
      <Text onPress={handleClick}>Check Ref</Text>
    </View>
  );
};

export default MyComponent;