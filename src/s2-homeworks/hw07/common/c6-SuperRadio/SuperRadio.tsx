import React, {
    ChangeEvent,
    InputHTMLAttributes,
    DetailedHTMLProps,
    HTMLAttributes,
} from 'react'
import s from './SuperRadio.module.css'

type DefaultRadioPropsType = DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>
// тип пропсов обычного спана
type DefaultSpanPropsType = DetailedHTMLProps<
    HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
>

type SuperRadioPropsType = Omit<DefaultRadioPropsType, 'type'> & {
    options?: any[]
    onChangeOption?: (option: any) => void

    spanProps?: DefaultSpanPropsType // пропсы для спана
}

const SuperRadio: React.FC<SuperRadioPropsType> = ({
    id,
    name,
    className,
    options,
    value,
    onChange,
    onChangeOption,
    spanProps,
    ...restProps
}) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        // делают студенты
        onChange?.(e)
        onChangeOption?.(e.currentTarget.value)
        console.log(e);
        
    }

    const finalRadioClassName = s.radio + (className ? ' ' + className : '')
    const spanClassName = s.span + (spanProps?.className ? ' ' + spanProps.className : '')

    const mappedOptions: any[] = options
        ? options.map((o) => (
              <label key={name + '-' + o.id} className={s.label}>
                  <input
                      id={id + '-input-' + o.id}
                      className={finalRadioClassName}
                      type={'radio'}
                      // name, checked, value делают студенты
                      //Это элемент <input> с атрибутами:
                      // id - уникальный идентификатор элемента, который используется для связи метки (<label>) с этим элементом;
                      // className - классы CSS, которые будут применены к элементу;
                      // type - тип элемента, в данном случае радиокнопка, то есть type={'radio'};
                      // name - имя группы радиокнопок, которые должны быть связаны между собой;
                      // value - значение радиокнопки, которое будет передано при выборе этой кнопки;
                      // checked - логический атрибут, который определяет, должна ли быть данная радиокнопка выбранной. Он устанавливается в true, если значение o.value равно value;
                      // onChange - функция обратного вызова, которая будет вызываться при изменении состояния радиокнопки;
                      // restProps - объект с дополнительными пропсами, которые могут быть переданы в элемент.
                      name={name}
                      value={o.value}
                      checked ={o.value === value}
                      onChange={onChangeCallback}
                      {...restProps}
                  />
                  <span
                      id={id + '-span-' + o.id}
                      {...spanProps}
                      className={spanClassName}
                  >
                      {o.value}
                  </span>
              </label>
          ))
        : []

    return <div className={s.options}>{mappedOptions}</div>
}

export default SuperRadio
