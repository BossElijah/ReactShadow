import React, { FC, ReactNode, RefObject } from 'react';

export type RootProps = {
    elementName: any;
    Container: any;
    delegatesFocus?: boolean;
    styleSheets?: CSSStyleSheet[];
    fallback?: ReactNode;
    children: ReactNode;
};

type ComponentProps<T> = T extends keyof JSX.IntrinsicElements ? React.ComponentProps<T> : T & { children: ReactNode };

export type ProxyProps<T> = Omit<RootProps, 'Container' | 'elementName'> & {
    children: ReactNode;
} & ComponentProps<T>;

export type ChildrenProps = { children: ReactNode };

export type WrapperProps = { root: ShadowRoot; children: ReactNode };

export type NoopProps = { children: ReactNode };

export type UseShadowArgs = Required<Pick<RootProps, 'Container' | 'delegatesFocus' | 'styleSheets' | 'children'>>;

export type UseShadowReturn = {
    ref: RefObject<HTMLElement>;
    shadowRoot: null | ShadowRoot;
    Children: FC<ChildrenProps>;
};

export type Element = <T>(prop: ProxyProps<T>) => JSX.Element;

declare global {
    interface ShadowRoot {
        adoptedStyleSheets: CSSStyleSheet[];
    }
}
