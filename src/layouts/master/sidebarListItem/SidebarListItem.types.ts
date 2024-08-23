import { NavLinkProps as BaseNavLinkProps } from 'react-router-dom';
import { MenuItemProps } from '@mui/material/MenuItem';

export type MasterSidebarListItemProp = {
    open: boolean;
    item: TMenuItem;
    active: (path: string) => boolean;
};

export type TMenuItem = {
    text: string;
    icon: JSX.Element;
    path: string;
    uuid: string;
    children: any;
    minText?: string;
};
export interface ListItemNavLinkStyleProps extends BaseNavLinkProps {
    active: boolean;
}

export interface MasterSidebarListItemStyleProps extends MenuItemProps {
    active: boolean;
}
