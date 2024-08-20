import {
    LuLayoutGrid,
    LuListOrdered,
    LuSoup,
    LuUsers,
    LuFileClock,
    LuUserSquare2,
    LuMessageCircle,
    LuSlack,
    LuWheat,
    LuTags,
} from 'react-icons/lu';

const getVerticalMenuItems = (username) => {
    const items = [
        {
            key: 'dashboard-page',
            label: 'Bảng điều khiển',
            icon: LuLayoutGrid,
            url: `/${username}/dashboard`,
            isTitle: true,
            allowedRoles: ['ROLE_ADMIN'],
        },
    ];

    return items;
};

const getClientVerticalMenuItems = () => {
    const items = [
        {
            key: 'home-page',
            label: 'Trang chủ',
            url: '/',
            isTitle: true,
        },
        {
            key: 'dish',
            label: 'Món chè',
            isTitle: true,
            url: '/dishes',
        },
        {
            key: 'admin-dashboard',
            label: 'Quản lý',
            url: '/admin/dashboard',
            isTitle: true,
        },
    ];

    return items;
};

const getHorizontalMenuItems = () => {
    const items = [
        {
            key: 'home-page',
            label: 'Trang chủ',
            url: '/',
            isTitle: true,
        },
        {
            key: 'dish',
            label: 'Món chè',
            isTitle: true,
            url: '/dishes',
        },
        {
            key: 'contact',
            label: 'Phản hồi',
            isTitle: true,
            url: '/contact-us',
        },
        {
            key: 'admin-dashboard',
            label: 'Quản lý',
            url: '/admin/dashboard',
            isTitle: true,
        },
    ];

    return items;
};

const findAllParent = (menuItems, menuItem) => {
    let parents = [];
    const parent = findMenuItem(menuItems, menuItem.parentKey);

    if (parent) {
        parents.push(parent.key);
        if (parent.parentKey) {
            parents = [...parents, ...findAllParent(menuItems, parent)];
        }
    }
    return parents;
};

const getMenuItemFromURL = (items, url) => {
    if (items instanceof Array) {
        for (const item of items) {
            const foundItem = getMenuItemFromURL(item, url);
            if (foundItem) return foundItem;
        }
    } else {
        if (items.url == url) return items;
        if (items.children != null) {
            for (const item of items.children) {
                if (item.url == url) return item;
            }
        }
    }
};

const findMenuItem = (menuItems, menuItemKey) => {
    if (menuItems && menuItemKey) {
        for (let i = 0; i < menuItems.length; i++) {
            if (menuItems[i].key === menuItemKey) {
                return menuItems[i];
            }
            const found = findMenuItem(menuItems[i].children, menuItemKey);
            if (found) return found;
        }
    }
    return null;
};

export {
    getHorizontalMenuItems,
    getClientVerticalMenuItems,
    getVerticalMenuItems,
    findAllParent,
    findMenuItem,
    getMenuItemFromURL,
};
