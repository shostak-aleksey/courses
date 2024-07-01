// File: src/shared/context/CollapseBtnContext.tsx
import {
    createContext, useContext, useState, useMemo, ReactNode,
} from 'react';

interface CollapseBtnContextProps {
  collapsed: boolean
  toggleCollapse: () => void
}

export const CollapseBtnContext = createContext<CollapseBtnContextProps | undefined>(
    undefined,
);

export const CollapseProvider = ({ children }: { children: ReactNode }) => {
    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapse = () => setCollapsed((prevState) => !prevState);

    const value = useMemo(() => ({ collapsed, toggleCollapse }), [collapsed]);

    return (
        <CollapseBtnContext.Provider value={value}>
            {children}
        </CollapseBtnContext.Provider>
    );
};

export const useCollapse = () => {
    const context = useContext(CollapseBtnContext);
    if (!context) {
        throw new Error('useCollapse must be used within a CollapseProvider aboba');
    }
    return context;
};
