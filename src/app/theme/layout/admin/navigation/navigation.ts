import {Injectable} from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  function?: any;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}

const NavigationItems = [
  {
    id: 'other',
    title: 'Admin',
    type: 'group',
    icon: 'feather icon-align-left',
    children: [
      {
        id: 'sample-page',
        title: 'Sample Page',
        type: 'item',
        url: '/sample-page',
        classes: 'nav-item',
        icon: 'feather icon-sidebar'
      },
      {
        id: 'posts-page',
        title: 'Posts Page',
        type: 'item',
        url: '/posts-page',
        classes: 'nav-item',
        icon: 'feather icon-sidebar'
      },
      {
        id: 'user-list',
        title: 'User List',
        type: 'item',
        url: '/user-list',
        classes: 'nav-item',
        icon: 'feather icon-sidebar'
      },
    ]
  }
];

@Injectable()
export class NavigationItem {
  public get() {
    return NavigationItems;
  }
}
