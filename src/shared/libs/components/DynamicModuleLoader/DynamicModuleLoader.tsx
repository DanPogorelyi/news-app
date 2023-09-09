import { useEffect, ReactNode } from 'react';
import { useStore } from 'react-redux';
import { ReduxStoreWithManager, StateSchema } from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';
import { useAppDispatch } from 'shared/libs/hooks/useAppDispatch/useAppDispatch';

export type ReducersMap = {
    [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>
}

type Props = {
    children: ReactNode;
    reducers: ReducersMap;
    removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader = ({
    children,
    reducers,
    removeAfterUnmount = true,
}: Props) => {
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useAppDispatch();

    useEffect(() => {
        const mountedReducers = store.reducerManager.getMountedReducers();

        Object.entries(reducers).forEach(([name, reducer]) => {
            const isMounted = mountedReducers[name as StateSchemaKey];

            if (!isMounted) {
                store.reducerManager.add(name as StateSchemaKey, reducer);
                dispatch({ type: `@INIT ${name} reducer` });
            }
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name]) => {
                    store.reducerManager.remove(name as StateSchemaKey);
                    dispatch({ type: `@DESTROY ${name} reducer` });
                });
            }
        };
    }, []);

    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{ children }</>;
};
