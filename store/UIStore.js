// That is a zustand global state management like react-redux. Zustand provides more user-friendly state management than redux.
import { useCallback } from 'react';
import create from 'zustand';

const store = create((set, get) => ({
	//Scroll Progress State
	scrollProgress: 0,
	updateProgress: (value) => set((_) => ({ scrollProgress: value })),

	// Scroll Lock Control
	isScrollLocked: false,
	lockScroll: (value) =>
		set((_) => ({
			isScrollLocked: value,
		})),

	// Models and Fallback Loading Control
	isModelsLoading: true,
	isModelsReady: false,
	isLoaderScreenMounted: true,
	isOverlayScreenMounted: false,
	endModelsLoading: () =>
		set((_) => ({
			isModelsLoading: false,
			isOverlayScreenMounted: true,
		})),

	//Idle Cards Animation Control
	isIdleCardsAnimationFinished: false,
	endIdleCardsAnimation: () =>
		set((_) => ({ isIdleCardsAnimationFinished: true })),
	//Idle Klaus Animation Control
	isIdleKlausAnimationFinished: false,
	endIdleKlausAnimation: () =>
		set((_) => ({ isIdleKlausAnimationFinished: true })),
	//Klaus Animation Control
	idleKlausAnimation: {},
	updateIdleKlausAnimation: (value) =>
		set((_) => ({ idleKlausAnimation: value })),
	//Klaus Card Visibility Control
	isKlausCardVisible: true,
	updateKlausCardVisibility: (value) =>
		set((_) => ({ isKlausCardVisible: value })),
	//Hro Room Visibility Control
	isHroRoomVisible: false,
	updateHroRoomVisibility: (value) =>
		set((_) => ({ isHroRoomVisible: value })),
	//Hro Room Portal Visibility Control
	isPortalVisible: false,
	updatePortalVisibility: (value) =>
		set((_) => ({ isPortalVisible: value })),

	//Clickable Card Parts Control
	isClickableCard: false,
	updateClickableCard: (value) =>
		set((_) => ({ isClickableCard: value })),

	//Camera Change Control
	activeCamera: 'camera_scroll',
	updateActiveCamera: (camera) =>
		set((_) => ({ activeCamera: camera })),

	// CanvasLayer Visibility Control
	isCanvasVisible: false,
	updateCanvasVisibility: (value) =>
		set((_) => ({ isCanvasVisible: value })),
}));

const useUIStore = (selector) =>
	store(useCallback(selector, [selector]));

export default useUIStore;
