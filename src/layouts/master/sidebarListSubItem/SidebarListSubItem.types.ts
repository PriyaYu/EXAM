import { NavLinkProps } from 'react-router-dom';

export type MasterSidebarListSubItemProp = {
    item: TMenuItem;
    parentPath: string;
    active: boolean;
};

export type TMenuItem = {
    text: string;
    icon: JSX.Element;
    path: string;
    uuid: string;
    children: any;
};

export interface MasterSidebarListSubItemStyleProps extends NavLinkProps {
    active: boolean;
}
