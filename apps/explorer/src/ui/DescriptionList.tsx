// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import type { ReactNode } from 'react';

import { Text, type TextProps } from '~/ui/Text';

export interface LabelProps extends TextProps {}
export type ValueProps = {
    children: ReactNode;
};

export function Label(props: LabelProps) {
    return (
        <dt className="col-span-1">
            <Text variant="body" {...props} />
        </dt>
    );
}

export function Value({ children }: ValueProps) {
    return <dd className="col-span-2 ml-0">{children}</dd>;
}

export type DescriptionListProps = {
    children: ReactNode;
};

export function DescriptionList({ children }: DescriptionListProps) {
    return (
        <dl className="grid grid-cols-1 gap-2 md:grid-cols-3">{children}</dl>
    );
}
