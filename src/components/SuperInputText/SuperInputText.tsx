import React, {
    ChangeEvent,
    DetailedHTMLProps,
    InputHTMLAttributes,
    KeyboardEvent,
    ReactNode,
} from 'react'
import s from './SuperInputText.module.css'

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement>

type SuperInputTextPropsType = Omit<DefaultInputPropsType, 'type'> & {
    // и + ещё пропсы которых нет в стандартном инпуте
    onChangeText?: (value: string) => void
    onEnter: () => void
    error?: ReactNode
    spanClassName?: string
}

const SuperInputText: React.FC<SuperInputTextPropsType> = (
    {
        onChange,
        onChangeText,
        onKeyPress,
        onEnter,
        error,
        className,
        spanClassName,

        ...restProps // все остальные пропсы попадут в объект restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e) // если есть пропс onChange, то передать ему е (поскольку onChange не обязателен)

        onChangeText?.(e.currentTarget.value)
    }
    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        onKeyPress?.(e)
        if (e.key === 'Enter') {
            onEnter()
        }
    }

    const finalSpanClassName = s.error
        + (spanClassName ? ' ' + spanClassName : '')

    const finalInputClassName = s.input
        + (error ? ' ' + s.errorInput : ' ' + s.superInput)
        + (className ? ' ' + s.className : '')

    return (
        <div className={s.inputWrapper}>
            <input

                type={'text'}
                onChange={onChangeCallback}
                onKeyPress={onKeyPressCallback}
                className={finalInputClassName}
                {...restProps}
            />
            <span
                className={finalSpanClassName}
            >
                {error}
            </span>
        </div>
    )
}

export default SuperInputText
