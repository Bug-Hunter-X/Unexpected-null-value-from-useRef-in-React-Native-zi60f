# Unexpected null value from useRef in React Native

This repository demonstrates a common error in React Native where the `useRef` hook unexpectedly returns `null`, even after component mounting.  This can lead to crashes or unexpected behavior if not handled properly. The solution provided shows how to safely handle this scenario.

## Bug Description
When using `useRef`, the `current` property might be `null` under certain circumstances, especially when accessing it prematurely in the component lifecycle.  This repository demonstrates the problem and its solution.

## How to Reproduce
Clone the repository and run the example. You will observe that accessing the `myRef.current` before the component is fully mounted will result in `null`.

## Solution
The solution involves checking for `null` before accessing the `current` property and potential use of the useEffect hook to ensure component mounting.