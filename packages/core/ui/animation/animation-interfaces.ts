// Types
import { View } from '../core/view';
import { CoreTypes } from '../../core-types';
import { Color } from '../../color';

export type Transformation = {
	property: TransformationType;
	value: TransformationValue;
};

export type TransformationType = 'rotate' | 'translate' | 'translateX' | 'translateY' | 'scale' | 'scaleX' | 'scaleY';

export type TransformationValue = Pair | number;

export type TransformFunctionsInfo = {
	translate: Pair;
	rotate: number;
	scale: Pair;
};

export interface AnimationPromise extends Promise<any>, Cancelable {
	then(...args): AnimationPromise;
	catch(...args): AnimationPromise;
}

export interface Pair {
	x: number;
	y: number;
}

export interface Cancelable {
	cancel(): void;
}

export interface PropertyAnimation {
	target: View;
	property: string;
	value: any;
	duration?: number;
	delay?: number;
	iterations?: number;
	curve?: any;
}

export interface PropertyAnimationInfo extends PropertyAnimation {
	_propertyResetCallback?: any;
	_originalValue?: any;
}

export interface AnimationDefinition {
	target?: View;
	opacity?: number;
	backgroundColor?: Color;
	translate?: Pair;
	scale?: Pair;
	height?: CoreTypes.PercentLengthType | string;
	width?: CoreTypes.PercentLengthType | string;
	rotate?: number;
	duration?: number;
	delay?: number;
	iterations?: number;
	curve?: any;
}

export interface AnimationDefinitionInternal extends AnimationDefinition {
	valueSource?: 'animation' | 'keyframe';
}

export interface IOSView extends View {
	_suspendPresentationLayerUpdates();
	_resumePresentationLayerUpdates();
	_isPresentationLayerUpdateSuspeneded();
}
