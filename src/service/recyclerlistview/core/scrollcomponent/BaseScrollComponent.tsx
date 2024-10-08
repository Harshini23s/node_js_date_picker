import * as React from 'react';
import { NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
import { Dimension } from '../LayoutProvider';

export interface ScrollComponentProps {
  onScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
  contentHeight: number;
  contentWidth: number;
  scrollEventThrottle?: number;
  renderContentContainer?: (
    props?: object,
    children?: React.ReactNode
  ) => React.ReactNode | null;
  renderAheadOffset: number;
  layoutSize?: Dimension;
  children: any;
}
export default abstract class BaseScrollComponent extends React.Component<
  ScrollComponentProps,
  {}
> {
  public abstract scrollTo(x: number, y: number, animate: boolean): void;

  //Override and return node handle to your custom scrollview. Useful if you need to use Animated Events.
  public getScrollableNode(): number | null {
    return null;
  }
}
