import React from 'react';

export type SidebarItemType = {
    path: string;
    text: string;
    isAuthOnly?: boolean;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>
}
