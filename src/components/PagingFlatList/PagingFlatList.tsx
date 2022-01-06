import React, { FunctionComponent, Ref, useCallback, useEffect } from 'react';
import { FlatList, FlatListProps } from 'react-native';

export enum State {
  Idle = 'idle',
  Loading = 'loading',
  Refresh = 'refresh',
  PageLoading = 'pageLoading',
  Error = 'error',
}

export interface Props extends FlatListProps<any> {
  onLoading: ({ page, state }: { page: number; state: State }) => void;
  isLoading: boolean;
  state: State;
  page: number;
  isError?: boolean;
  innerRef?: Ref<FlatList> | null;
}

const PagingFlatList: FunctionComponent<Props> = (props) => {
  const {
    innerRef,
    page,
    isLoading,
    state,
    onLoading,
    onEndReached,
    ...restProps
  } = props;

  const handleOnReachEnd = useCallback(
    (info: { distanceFromEnd: number }) => {
      if (onLoading) {
        onEndReached && onEndReached(info);
        onLoading({ page: page + 1, state: State.PageLoading });
      }
    },
    [onLoading, onEndReached, page],
  );

  const handleRefresh = useCallback(() => {
    if (onLoading) {
      onLoading({ page: 0, state: State.Refresh });
    }
  }, [onLoading]);

  // initial loading
  useEffect(() => {
    if (onLoading) {
      onLoading({ page: 0, state: State.Loading });
    }
  }, []);

  return (
    <FlatList
      {...restProps}
      ref={innerRef}
      onRefresh={handleRefresh}
      refreshing={state === State.Refresh && isLoading}
      onEndReached={handleOnReachEnd}
    />
  );
};
export default PagingFlatList;
