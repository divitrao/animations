import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type UserInfoListScreenParamList = undefined
export type UserFormFillScreenParamList = undefined
export type AnimationScreenParamList = undefined
export type NotificationScreenParamList = undefined
export type ListerScreenParamList = undefined
export type TextScreenParamList = undefined
export type HorizonTalParalxParamList = undefined
export type HearBeatparamList = undefined
export type LoadingAnimationParamList = undefined
export type SwitchScreenParamList = undefined
export type BoxScreenParamList = undefined
export type DoubleTapPramList = undefined

export type RootParamList = {
    'INFO_LIST':UserInfoListScreenParamList,
    'FORM_FILL':UserFormFillScreenParamList,
    'ANIMATION_SCREEN':AnimationScreenParamList,
    'NOTIFICATION_SCREEN':NotificationScreenParamList,
    'LISTER_SCREEN':ListerScreenParamList,
    'TEXT_SCREEN':TextScreenParamList,
    'HORIZONTAL_PARALX_SCREEN':HorizonTalParalxParamList,
    'HEAR_BEAT_SCREEN':HearBeatparamList,
    'LOADING_ANIMATION_SCREEN': LoadingAnimationParamList,
    'SWITCH_ANIMATION_SCREEN': SwitchScreenParamList,
    'BOX_ANIMATION_SCREEN':BoxScreenParamList,
    'DOUBLE_TAP_ANIMATION_SCREEN': DoubleTapPramList
}

export type PropsUserInfoList = NativeStackScreenProps<RootParamList,'INFO_LIST'>
export type PropsUserForm = NativeStackScreenProps<RootParamList,'FORM_FILL'>