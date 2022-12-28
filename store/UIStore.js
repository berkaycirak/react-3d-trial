// That is a zustand global state management like react-redux. Zustand provides more user-friendly state management than redux.
import { useCallback } from 'react';
import create from 'zustand';

const store = create((set, get) => ({
	//Scroll Progress State
	scrollProgress: 0,
	updateProgress: (value) =>
		set((state) => ({ scrollProgress: value })),
}));

const useStore = (selector) =>
	store(useCallback(selector, [selector]));

export default useStore;
