const initState = {
    isLoading: false,
}
type ReducerType = {
    isLoading: boolean
}

export const loadingReducer = (state = initState, action: LoadingActionType): ReducerType => { // fix any
    switch (action.type) {
        // пишет студент  // need to fix
        case 'CHANGE_LOADING':
            return { ...state, isLoading: action.isLoading }
        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => {
    return ({
        type: 'CHANGE_LOADING',
        isLoading,
    })
}
