import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../contexts';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;